// lock.js
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".form-container");
    const submitBtn = form.querySelector(".submit-btn");
    const requiredFields = form.querySelectorAll("input[required], select[required], textarea[required]");
  
    function validateForm() {
      let allFilled = true;
  
      requiredFields.forEach(field => {
        if (!field.value.trim()) {
          allFilled = false;
        }
      });
  
      submitBtn.disabled = !allFilled;
      submitBtn.classList.toggle("btn-disabled", !allFilled);
    }
  
    // Initial check
    validateForm();
  
    // Live validation
    requiredFields.forEach(field => {
      field.addEventListener("input", validateForm);
      field.addEventListener("change", validateForm);
    });
  });