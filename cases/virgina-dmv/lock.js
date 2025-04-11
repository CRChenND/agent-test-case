// lock.js

window.addEventListener("DOMContentLoaded", function () {
    const submitBtn = document.getElementById("submit");
    const requiredFields = [
        "first-name",
        "last-name",
        "phone",
        "email",
        "confirm-email"
    ].map(id => document.getElementById(id));

    // Disable the button at start
    submitBtn.disabled = true;

    function validateForm() {
        const allFilled = requiredFields.every(field => field.value.trim() !== "");
        const emailsMatch = document.getElementById("email").value === document.getElementById("confirm-email").value;

        submitBtn.disabled = !(allFilled && emailsMatch);
    }

    requiredFields.forEach(field => {
        field.addEventListener("input", validateForm);
    });
});
