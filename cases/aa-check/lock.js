document.addEventListener("DOMContentLoaded", function () {
    const lastNameInput = document.getElementById("last-name");
    const confirmationInput = document.getElementById("confirmation-code");
    const findBtn = document.querySelector(".find-btn");

    function validateForm() {
        if (lastNameInput.value.trim() !== "" && confirmationInput.value.trim() !== "") {
            findBtn.disabled = false;
        } else {
            findBtn.disabled = true;
        }
    }

    // 初始禁用按钮
    validateForm();

    // 添加输入事件监听器
    lastNameInput.addEventListener("input", validateForm);
    confirmationInput.addEventListener("input", validateForm);

    // 原有点击事件保留
    findBtn.addEventListener("click", function (event) {
        alert("Task complete!");
        downloadLog();
    });
});

