window.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("weight-gain-form");
    const inputs = form.querySelectorAll("input[type='number']");
    const submitBtn = form.querySelector("button[type='submit']");

    function validateForm() {
        let allFilled = true;
        inputs.forEach(input => {
            if (!input.value.trim()) {
                allFilled = false;
            }
        });
        submitBtn.disabled = !allFilled;
    }

    // Disable button on load
    submitBtn.disabled = true;

    // Add input listeners
    inputs.forEach(input => {
        input.addEventListener("input", validateForm);
    });
});
