document.addEventListener("DOMContentLoaded", function () {
    if (typeof initLogger === "function") {
      initLogger("dd.json");
    }
  
    const form = document.querySelector("form");
    const calculateBtn = document.querySelector(".calculate-button");
    const cityInput = document.getElementById("city");
    const incomeInput = document.getElementById("income");
  
    function validateInputs() {
      const cityFilled = cityInput && cityInput.value.trim() !== "";
      const incomeFilled = incomeInput && incomeInput.value.trim() !== "";
  
      if (calculateBtn) {
        calculateBtn.disabled = !(cityFilled && incomeFilled);
        calculateBtn.style.opacity = calculateBtn.disabled ? "0.6" : "1";
        calculateBtn.style.cursor = calculateBtn.disabled ? "not-allowed" : "pointer";
      }
    }
  
    // Initial validation
    validateInputs();
  
    // Listen for input changes
    cityInput.addEventListener("input", validateInputs);
    incomeInput.addEventListener("input", validateInputs);
  
    // Submit handler
    form.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent real submission
      validateInputs();
  
      if (!calculateBtn.disabled) {
        alert("Task complete!");
        if (typeof downloadLog === "function") {
          downloadLog();
        }
      }
    });
  });