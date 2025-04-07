document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const submitBtn = form?.querySelector(".btn-continue");
  
    if (!form || !submitBtn) return;
  
    const requiredFields = form.querySelectorAll("input[required]");
  
    function validateForm() {
      let allFilled = true;
  
      requiredFields.forEach((field) => {
        if (field.type === "radio") {
          const group = form.querySelectorAll(`input[name="${field.name}"]`);
          const oneChecked = Array.from(group).some((el) => el.checked);
          if (!oneChecked) allFilled = false;
        } else {
          if (!field.value.trim()) allFilled = false;
        }
      });
  
      submitBtn.disabled = !allFilled;
      submitBtn.classList.toggle("btn-disabled", !allFilled);
    }
  
    // Initial check
    validateForm();
  
    // Attach listeners
    requiredFields.forEach((field) => {
      field.addEventListener("input", validateForm);
      field.addEventListener("change", validateForm);
    });
  
    // Task complete alert (if desired)
    submitBtn.addEventListener("click", function (event) {
      alert("Task complete!");
      if (typeof downloadLog === "function") {
        downloadLog();
      }
    });
  });