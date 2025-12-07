document.addEventListener("DOMContentLoaded", function () {
    const submitBtn = document.getElementById("submit");

    const confirmation = document.getElementById("confirmation-number");
    const firstName = document.getElementById("first-name");
    const lastName = document.getElementById("last-name");

    function checkFields() {
        const allFilled =
            confirmation.value.trim() !== "" &&
            firstName.value.trim() !== "" &&
            lastName.value.trim() !== "";

        submitBtn.disabled = !allFilled;
    }

    [confirmation, firstName, lastName].forEach(input => {
        input.addEventListener("input", checkFields);
        input.addEventListener("change", checkFields);
    });

    checkFields(); // Run initial check
});
