document.addEventListener("DOMContentLoaded", function () {
    const submitBtn = document.getElementById("submit");
    const confirmationInput = document.getElementById("confirmation-number");
    const firstNameInput = document.getElementById("first-name");
    const lastNameInput = document.getElementById("last-name");

    function checkInputs() {
        const isFilled =
            confirmationInput.value.trim() !== "" &&
            firstNameInput.value.trim() !== "" &&
            lastNameInput.value.trim() !== "";
        submitBtn.disabled = !isFilled;
    }

    // Run on page load
    checkInputs();

    // Bind listeners to input events
    [confirmationInput, firstNameInput, lastNameInput].forEach(input => {
        input.addEventListener("input", checkInputs);
    });
});
