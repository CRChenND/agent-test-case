document.addEventListener("DOMContentLoaded", function () {
    const lastNameInput = document.getElementById("last-name");
    const confirmationInput = document.getElementById("confirmation-code");
    const ticketInput = document.getElementById("ticket-number");
    const findBtn = document.querySelector(".find-btn");

    function checkRequiredFields() {
        const lastNameFilled = lastNameInput.value.trim() !== "";
        const codeFilled = confirmationInput.value.trim() !== "";
        const ticketFilled = ticketInput.value.trim() !== "";

        // Either confirmation code OR ticket number must be filled, and last name must be filled
        if (lastNameFilled && (codeFilled || ticketFilled)) {
            findBtn.disabled = false;
        } else {
            findBtn.disabled = true;
        }
    }

    // Run once on load
    checkRequiredFields();

    // Bind to input changes
    lastNameInput.addEventListener("input", checkRequiredFields);
    confirmationInput.addEventListener("input", checkRequiredFields);
    ticketInput.addEventListener("input", checkRequiredFields);
});
