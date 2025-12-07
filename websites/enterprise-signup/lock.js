document.addEventListener("DOMContentLoaded", function () {
    const submitBtn = document.getElementById("submit");

    const firstName = document.getElementById("first-name");
    const lastName = document.getElementById("last-name");
    const email = document.getElementById("email");
    const confirmEmail = document.getElementById("confirm-email");
    const country = document.getElementById("country");
    const zip = document.getElementById("zip-code");

    function validateEmailMatch() {
        return email.value.trim() !== "" &&
               confirmEmail.value.trim() !== "" &&
               email.value.trim() === confirmEmail.value.trim();
    }

    function checkRequiredFields() {
        const allFilled =
            firstName.value.trim() !== "" &&
            lastName.value.trim() !== "" &&
            email.value.trim() !== "" &&
            confirmEmail.value.trim() !== "" &&
            country.value.trim() !== "" &&
            zip.value.trim() !== "";

        const emailMatches = validateEmailMatch();

        submitBtn.disabled = !(allFilled && emailMatches);
    }

    const inputs = [firstName, lastName, email, confirmEmail, country, zip];

    inputs.forEach(input => {
        input.addEventListener("input", checkRequiredFields);
        input.addEventListener("change", checkRequiredFields);
    });

    checkRequiredFields(); // Initial check on page load
});
