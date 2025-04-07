document.addEventListener("DOMContentLoaded", function () {
    // Initialize logging
    if (typeof initLogger === "function") {
      initLogger("dd.json");
    }
  
    const fromInput = document.getElementById("from");
    const toInput = document.getElementById("destination");
    const startDateInput = document.getElementById("startDate");
    const endDateInput = document.getElementById("endDate");
    const searchBtn = document.querySelector(".submit-btn");
  
    function validateForm() {
      const fromValid = fromInput.value.trim() !== "";
      const toValid = toInput.value.trim() !== "";
      const startDateValid = startDateInput.value !== "";
      const endDateValid = endDateInput.value !== "";
  
      const allValid = fromValid && toValid && startDateValid && endDateValid;
  
      searchBtn.disabled = !allValid;
      searchBtn.style.opacity = allValid ? "1" : "0.6";
      searchBtn.style.cursor = allValid ? "pointer" : "not-allowed";
    }
  
    // Run validation on input changes
    [fromInput, toInput, startDateInput, endDateInput].forEach((el) =>
      el.addEventListener("input", validateForm)
    );
  
    validateForm(); // Initial state
  
    searchBtn.addEventListener("click", function (event) {
      if (searchBtn.disabled) {
        event.preventDefault();
        alert("Please fill out all required fields before continuing.");
      } else {
        alert("Task complete!");
        if (typeof downloadLog === "function") {
          downloadLog();
        }
      }
    });
  });