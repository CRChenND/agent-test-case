document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("suv-booking-form");
    const submitBtn = form.querySelector('button[type="submit"]');

    const requiredFields = [
        "pickup-location",
        "pickup-date",
        "dropoff-date",
        "car-type",
        "payment-option"
    ];

    function validateForm() {
        const allFilled = requiredFields.every(id => {
            const field = document.getElementById(id);
            return field && field.value.trim() !== "";
        });
        submitBtn.disabled = !allFilled;
    }

    // Initial state
    validateForm();

    // Add input event listeners
    requiredFields.forEach(id => {
        const field = document.getElementById(id);
        field.addEventListener("input", validateForm);
        field.addEventListener("change", validateForm); // for <select> elements
    });
});
