// lock.js
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const requiredInputs = form.querySelectorAll("input[required], select[required]");
    const continueBtn = document.getElementById("continue");

    function validateForm() {
        let allValid = true;
        requiredInputs.forEach((input) => {
            if (!input.value || input.value.trim() === "") {
                allValid = false;
            }
        });

        if (allValid) {
            continueBtn.disabled = false;
            continueBtn.classList.remove("btn-disabled");
        } else {
            continueBtn.disabled = true;
            continueBtn.classList.add("btn-disabled");
        }
    }

    // Run once initially
    validateForm();

    // Listen for input changes
    requiredInputs.forEach((input) => {
        input.addEventListener("input", validateForm);
        input.addEventListener("change", validateForm); // also for <select>
    });
});