document.addEventListener("DOMContentLoaded", function () {
    const btn = document.getElementById("search-btn");
    const ticketInput = document.getElementById("ticket-number");
    const lastNameInput = document.getElementById("last-name");

    function checkInput() {
        const ticketValue = ticketInput.value.trim();
        const lastNameValue = lastNameInput.value.trim();
        btn.disabled = !(ticketValue && lastNameValue);
    }

    // Initial check
    checkInput();

    // Watch for input changes
    ticketInput.addEventListener("input", checkInput);
    lastNameInput.addEventListener("input", checkInput);
});
