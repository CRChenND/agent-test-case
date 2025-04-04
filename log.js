let userActions = JSON.parse(localStorage.getItem("userActions") || "[]");
let lastInputValues = JSON.parse(localStorage.getItem("lastInputValues") || "{}");
let lastToggleStates = JSON.parse(localStorage.getItem("lastToggleStates") || "{}");
let currentPopupElements = [];
let logFilename = "activity_log.json";

function saveToLocalStorage() {
    localStorage.setItem("userActions", JSON.stringify(userActions));
    localStorage.setItem("lastInputValues", JSON.stringify(lastInputValues));
    localStorage.setItem("lastToggleStates", JSON.stringify(lastToggleStates));
}

function logAction(eventType, details) {
    const entry = {
        event: eventType,
        details: details,
        timestamp: new Date().toISOString(),
    };
    userActions.push(entry);
    saveToLocalStorage();
}

function isClickInPopup(target) {
    return currentPopupElements.some((popup) => popup.contains(target));
}

function registerPopupElement(el) {
    if (el && !currentPopupElements.includes(el)) {
    currentPopupElements.push(el);
    }
}

function downloadLog() {
    // Capture final values before download
    for (const [id, value] of Object.entries(lastInputValues)) {
        logAction("input", { fieldId: id, finalValue: value });
    }
    for (const [id, checked] of Object.entries(lastToggleStates)) {
        logAction("toggle-final", { id: id, finalChecked: checked });
    }

    saveToLocalStorage();  // Ensure everything is stored

    const blob = new Blob([JSON.stringify(userActions, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = logFilename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    // Optional: Clear log after download
    localStorage.removeItem("userActions");
    localStorage.removeItem("lastInputValues");
    localStorage.removeItem("lastToggleStates");
}



function getInputIdentifier(el) {
  return el.id || el.name || generateSelector(el);
}

function generateSelector(el) {
  if (!el) return "unknown";
  const path = [];
  while (el && el.nodeType === Node.ELEMENT_NODE && el.tagName.toLowerCase() !== "html") {
      let selector = el.tagName.toLowerCase();
      if (el.id) {
          selector += `#${el.id}`;
      } else if (el.className) {
          selector += `.${el.className.trim().replace(/\s+/g, ".")}`;
      }
      path.unshift(selector);
      el = el.parentNode;
  }
  return path.join(" > ");
}

function initLogger(filename = "activity_log.json") {
    if (!sessionStorage.getItem("loggerInitialized")) {

        localStorage.removeItem("userActions");
        localStorage.removeItem("lastInputValues");
        localStorage.removeItem("lastToggleStates");
    
        userActions = [];
        lastInputValues = {};
        lastToggleStates = {};
    
        sessionStorage.setItem("loggerInitialized", "true");
      } else {

        userActions = JSON.parse(localStorage.getItem("userActions") || "[]");
        lastInputValues = JSON.parse(localStorage.getItem("lastInputValues") || "{}");
        lastToggleStates = JSON.parse(localStorage.getItem("lastToggleStates") || "{}");
      }
    


  logFilename = filename;

  document.addEventListener("click", (event) => {
      const target = event.target;
      if (target.tagName.toLowerCase() !== "input") {
          const inPopup = isClickInPopup(target);
          logAction("click", {
              element: target.tagName.toLowerCase(),
              id: target.id || "none",
              classname: target.className || "none",
              elementText: target.textContent?.substring(0, 50) || "none",
              x: event.clientX,
              y: event.clientY,
              isInPopup: inPopup,
          });
      }
  });

  document.querySelectorAll("input, textarea").forEach((input) => {
      const type = input.type;
      const allowedTypes = ["text", "number", "email", "password", "search", "url", "tel", "textarea", "date", "time"];
      if (allowedTypes.includes(type) || input.tagName.toLowerCase() === "textarea") {
          input.addEventListener("input", (event) => {
              const id = getInputIdentifier(event.target);
              const value = event.target.value;
              lastInputValues[id] = value;
          });
      }
  });

  document.querySelectorAll("select").forEach((select) => {
      select.addEventListener("change", (event) => {
          const id = getInputIdentifier(event.target);
          const value = event.target.value;
          lastInputValues[id] = value;
          logAction("select", {
              fieldId: id,
              selectedValue: value
          });
      });
  });

  document.querySelectorAll("input[type='checkbox'], input[type='radio']").forEach((toggle) => {
      toggle.addEventListener("change", (event) => {
          const toggleId = getInputIdentifier(event.target);
          const checked = event.target.checked;
          logAction("toggle", {
              id: toggleId,
              type: event.target.type,
              name: event.target.name || "none",
              checked: checked,
          });
          lastToggleStates[toggleId] = checked;
      });
  });
}

