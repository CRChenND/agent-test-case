window.addEventListener("DOMContentLoaded", function () {
    const lastNameInput = document.getElementById("last-name");
    const confirmationInput = document.getElementById("confirmation-number");
    const submitBtn = document.querySelector('button[type="submit"]');

    function validate() {
        const isValid = lastNameInput.value.trim() !== "" && confirmationInput.value.trim() !== "";
        submitBtn.disabled = !isValid;
    }

    // 初始禁用
    submitBtn.disabled = true;

    // 监听输入变化
    lastNameInput.addEventListener("input", validate);
    confirmationInput.addEventListener("input", validate);
});
