document.addEventListener("DOMContentLoaded", function () {
    const confirmInput = document.getElementById("confirmation");
    const lastNameInput = document.getElementById("lastName");
    const nextBtn = document.querySelector(".next-button");
  
    function validateForm() {
      const isValid =
        confirmInput.value.trim().length > 0 && lastNameInput.value.trim().length > 0;
  
      nextBtn.disabled = !isValid;
      nextBtn.style.opacity = isValid ? "1" : "0.5";
      nextBtn.style.cursor = isValid ? "pointer" : "not-allowed";
    }
  
    // Bind input listeners
    [confirmInput, lastNameInput].forEach((input) => {
      input.addEventListener("input", validateForm);
    });
  
    // Initialize
    validateForm();
  });