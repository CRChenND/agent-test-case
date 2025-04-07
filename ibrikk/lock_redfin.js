document.addEventListener("DOMContentLoaded", function () {
  const calculateBtn = document.querySelector(".calculate-button");
  const cityInput = document.getElementById("city");
  const incomeInput = document.getElementById("income");

  if (!calculateBtn || !cityInput || !incomeInput) return;

  function validateInputs() {
    const cityFilled = cityInput.value.trim() !== "";
    const incomeFilled = incomeInput.value.trim() !== "";

    const valid = cityFilled && incomeFilled;

    calculateBtn.disabled = !valid;
    calculateBtn.style.opacity = valid ? "1" : "0.6";
    calculateBtn.style.cursor = valid ? "pointer" : "not-allowed";
  }

  // 初始验证
  validateInputs();

  // 监听输入变化
  cityInput.addEventListener("input", validateInputs);
  incomeInput.addEventListener("input", validateInputs);
});