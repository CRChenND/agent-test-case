// lock.js
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const payBtn = document.querySelector(".paynow");
  
    // Select all required inputs and selects within the form
    const requiredFields = form.querySelectorAll("input[required], select[required]");
  
    function validateForm() {
      let allValid = true;
  
      requiredFields.forEach(field => {
        if (!field.value.trim()) {
          allValid = false;
        }
      });
  
      if (allValid) {
        payBtn.disabled = false;
        payBtn.classList.remove("btn-disabled");
      } else {
        payBtn.disabled = true;
        payBtn.classList.add("btn-disabled");
      }
    }
  
    // Initial check
    validateForm();
  
    // Watch for changes
    requiredFields.forEach(field => {
      field.addEventListener("input", validateForm);
      field.addEventListener("change", validateForm); // for selects and checkboxes
    });
  });