// lock.js
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const requiredFields = form.querySelectorAll("input[required], select[required]");
    const continueBtn = document.querySelector(".continue-btn");
  
    function validateForm() {
      let allFilled = true;
      requiredFields.forEach((el) => {
        if (!el.value || el.value.trim() === "") {
          allFilled = false;
        }
      });
  
      if (allFilled) {
        continueBtn.disabled = false;
        continueBtn.classList.remove("btn-disabled");
      } else {
        continueBtn.disabled = true;
        continueBtn.classList.add("btn-disabled");
      }
    }
  
    // Initial state
    validateForm();
  
    // Add listeners
    requiredFields.forEach((el) => {
      el.addEventListener("input", validateForm);
      el.addEventListener("change", validateForm);
    });
  });