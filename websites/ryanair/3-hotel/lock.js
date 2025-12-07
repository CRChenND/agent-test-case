// lock.js
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const submitBtn = document.querySelector(".complete-button");
    const requiredFields = form.querySelectorAll("input[required], select[required]");
  
    function validateForm() {
      let allFilled = true;
  
      requiredFields.forEach(field => {
        if (!field.value.trim()) {
          allFilled = false;
        }
      });
  
      if (allFilled) {
        submitBtn.disabled = false;
        submitBtn.classList.remove("btn-disabled");
      } else {
        submitBtn.disabled = true;
        submitBtn.classList.add("btn-disabled");
      }
    }
  
    // Initial validation
    validateForm();
  
    // Add event listeners to each field
    requiredFields.forEach(field => {
      field.addEventListener("input", validateForm);
      field.addEventListener("change", validateForm);
    });
  });