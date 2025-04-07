document.addEventListener("DOMContentLoaded", function () {
    // Initialize logger
    if (typeof initLogger === "function") {
      initLogger("dd.json");
    }
  
    const form = document.querySelector("form");
    const submitBtn = document.querySelector(".find-button");
  
    if (!form || !submitBtn) return;
  
    const requiredInputs = form.querySelectorAll("input[required]");
  
    function validateForm() {
      let allFilled = true;
      requiredInputs.forEach((input) => {
        if (!input.value.trim()) {
          allFilled = false;
        }
      });
  
      submitBtn.disabled = !allFilled;
      submitBtn.style.opacity = allFilled ? "1" : "0.6";
      submitBtn.style.cursor = allFilled ? "pointer" : "not-allowed";
    }
  
    // Initial validation state
    validateForm();
  
    // Listen to input changes
    requiredInputs.forEach((input) => {
      input.addEventListener("input", validateForm);
    });
  
    // Submission handler
    submitBtn.addEventListener("click", function (event) {
      event.preventDefault();
      if (submitBtn.disabled) return;
  
      alert("Task complete!");
      if (typeof downloadLog === "function") {
        downloadLog();
      }
    });
  });