document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const submitBtn = form.querySelector(".btn-continue");
    const requiredFields = form.querySelectorAll("input[required]");
  
    function validateForm() {
      let allFilled = true;
  
      requiredFields.forEach((field) => {
        if (field.type === "radio") {
          const group = form.querySelectorAll(`input[name="${field.name}"]`);
          const oneChecked = Array.from(group).some((el) => el.checked);
          if (!oneChecked) allFilled = false;
        } else if (!field.value.trim()) {
          allFilled = false;
        }
      });
  
      submitBtn.disabled = !allFilled;
      submitBtn.classList.toggle("btn-disabled", !allFilled);
    }
  
    validateForm();
  
    requiredFields.forEach((field) => {
      field.addEventListener("input", validateForm);
      field.addEventListener("change", validateForm);
    });
  });