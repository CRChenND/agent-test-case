// This function disables the given button unless all required fields are filled
function lockButtonUntilRequiredFilled(buttonId) {
    const button = document.getElementById(buttonId);
    if (!button) return;

    const form = button.closest("form");
    const requiredInputs = form.querySelectorAll("input[required]");

    function checkAllFilled() {
        const allFilled = Array.from(requiredInputs).every(
            (input) => input.value.trim() !== ""
        );
        button.disabled = !allFilled;
    }

    // Initial check
    checkAllFilled();

    // Attach input listeners
    requiredInputs.forEach((input) => {
        input.addEventListener("input", checkAllFilled);
    });
}
