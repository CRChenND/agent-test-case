document.addEventListener("DOMContentLoaded", function () {
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const phoneInput = document.getElementById("phone");
    const submitBtn = document.querySelector('button[type="submit"]');

    function validate() {
        const hasName = nameInput.value.trim() !== "";
        const hasEmail = emailInput.value.trim() !== "";
        const hasPhone = phoneInput.value.trim() !== "";

        submitBtn.disabled = !(hasName && (hasEmail || hasPhone));
    }

    // 初始禁用
    validate();

    [nameInput, emailInput, phoneInput].forEach(input => {
        input.addEventListener("input", validate);
    });
});
