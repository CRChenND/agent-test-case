document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const submitBtn = document.querySelector(".find-button");

  if (!form || !submitBtn) return;

  const requiredInputs = form.querySelectorAll("input[required]");

  function validateForm() {
    let allFilled = true;
    requiredInputs.forEach((input) => {
      if (!input.value.trim()) {
        allFilled = false;
      }
    });

    submitBtn.disabled = !allFilled;
    submitBtn.style.opacity = allFilled ? "1" : "0.6";
    submitBtn.style.cursor = allFilled ? "pointer" : "not-allowed";
  }

  // 初始化时执行一次
  validateForm();

  // 添加输入监听器
  requiredInputs.forEach((input) => {
    input.addEventListener("input", validateForm);
  });
});