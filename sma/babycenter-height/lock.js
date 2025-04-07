window.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("height-predictor-form");
    const submitBtn = form.querySelector('button[type="submit"]');

    const requiredFields = [
        "currentHeightFeet",
        "currentHeightInches",
        "weight",
        "motherHeightFeet",
        "motherHeightInches",
        "fatherHeightFeet",
        "fatherHeightInches"
    ].map(id => document.getElementById(id));

    const ageSelect = document.getElementById("child-age");
    const sexInputs = document.querySelectorAll("input[name='sex']");

    function validateForm() {
        const allFilled = requiredFields.every(input => input.value.trim() !== "");
        const ageSelected = ageSelect.value.trim() !== "";
        const sexSelected = [...sexInputs].some(input => input.checked);

        submitBtn.disabled = !(allFilled && ageSelected && sexSelected);
    }

    // Init state
    validateForm();

    requiredFields.forEach(input => input.addEventListener("input", validateForm));
    ageSelect.addEventListener("change", validateForm);
    sexInputs.forEach(input => input.addEventListener("change", validateForm));
});
