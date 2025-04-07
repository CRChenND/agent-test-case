// lock.js
document.addEventListener("DOMContentLoaded", function () {
    const emailInput = document.getElementById("email");
    const zipcodeInput = document.getElementById("zipcode");
    const submitBtn = document.querySelector(".btn-primary");

    function validateForm() {
        const emailValid = emailInput.value.trim() !== "";
        const zipcodeValid = zipcodeInput.validity.valid;

        if (emailValid && zipcodeValid) {
            submitBtn.disabled = false;
            submitBtn.classList.remove("btn-disabled");
        } else {
            submitBtn.disabled = true;
            submitBtn.classList.add("btn-disabled");
        }
    }

    // Initial validation
    validateForm();

    // Event listeners
    emailInput.addEventListener("input", validateForm);
    zipcodeInput.addEventListener("input", validateForm);
});