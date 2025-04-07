// lock.js
document.addEventListener("DOMContentLoaded", function () {
    const lastNameInput = document.getElementById("lastName");
    const confirmationInput = document.getElementById("confirmationCode");
    const continueBtn = document.querySelector(".continue-btn");

    function validateForm() {
        const lastNameValid = lastNameInput.value.trim() !== "";
        const confirmationValid = confirmationInput.value.trim() !== "";

        if (lastNameValid && confirmationValid) {
            continueBtn.disabled = false;
            continueBtn.classList.remove("btn-disabled");
        } else {
            continueBtn.disabled = true;
            continueBtn.classList.add("btn-disabled");
        }
    }

    // Initial state
    validateForm();

    // Input listeners
    lastNameInput.addEventListener("input", validateForm);
    confirmationInput.addEventListener("input", validateForm);
});