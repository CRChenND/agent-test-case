window.addEventListener("DOMContentLoaded", function () {
    const nameInput = document.querySelector('#contactModal input[placeholder="Name"]');
    const emailInput = document.querySelector('#contactModal input[placeholder="Email Address"]');
    const phoneInput = document.querySelector('#contactModal input[placeholder="Phone Number"]');
    const submitBtn = document.getElementById("submit");

    function validate() {
        const nameFilled = nameInput.value.trim() !== "";
        const emailFilled = emailInput.value.trim() !== "";
        const phoneFilled = phoneInput.value.trim() !== "";

        submitBtn.disabled = !(nameFilled && (emailFilled || phoneFilled));
    }

    // Start disabled
    submitBtn.disabled = true;

    nameInput.addEventListener("input", validate);
    emailInput.addEventListener("input", validate);
    phoneInput.addEventListener("input", validate);
});
