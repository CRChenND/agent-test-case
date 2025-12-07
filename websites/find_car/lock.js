document.addEventListener("DOMContentLoaded", function () {
  const pickupLocation = document.querySelector('input[placeholder="Pickup location*"]');
  const dateInputs = document.querySelectorAll('input[type="date"]');
  const pickupTime = document.querySelector('select[aria-label="Pickup time"], select:nth-of-type(1)');
  const dropoffTime = document.querySelector('select[aria-label="Drop off time"], select:nth-of-type(2)');
  const submitBtn = document.querySelector(".submit-btn");

  if (!pickupLocation || !pickupTime || !dropoffTime || !submitBtn) return;

  function validate() {
    const locationFilled = pickupLocation.value.trim() !== "";
    const datesFilled = [...dateInputs].every(input => input.value !== "");
    const timesSelected = pickupTime.value !== "" && dropoffTime.value !== "";

    const valid = locationFilled && datesFilled && timesSelected;

    submitBtn.disabled = !valid;
    submitBtn.style.opacity = valid ? "1" : "0.5";
    submitBtn.style.cursor = valid ? "pointer" : "not-allowed";
  }

  // 初始化验证
  validate();

  // 添加监听器（只管验证，不做交互）
  pickupLocation.addEventListener("input", validate);
  dateInputs.forEach(input => input.addEventListener("change", validate));
  pickupTime.addEventListener("change", validate);
  dropoffTime.addEventListener("change", validate);
});