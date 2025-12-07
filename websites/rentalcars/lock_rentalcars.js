document.addEventListener("DOMContentLoaded", function () {
  const btn = document.querySelector(".search-btn");
  const pickupLocation = document.querySelector('.form-control[placeholder="Pick-up location"]');
  const pickupDate = document.getElementById("pick-up-date");
  const pickupTime = document.getElementById("pick-up-time");
  const dropoffDate = document.getElementById("drop-off-date");
  const dropoffTime = document.getElementById("drop-off-time");

  if (!btn || !pickupLocation || !pickupDate || !pickupTime || !dropoffDate || !dropoffTime) return;

  function validateFields() {
    const allFilled =
      pickupLocation.value.trim() !== "" &&
      pickupDate.value !== "" &&
      pickupTime.value !== "" &&
      dropoffDate.value !== "" &&
      dropoffTime.value !== "";

    btn.disabled = !allFilled;
    btn.style.opacity = allFilled ? "1" : "0.6";
    btn.style.cursor = allFilled ? "pointer" : "not-allowed";
  }

  validateFields(); // 初始状态

  [pickupLocation, pickupDate, pickupTime, dropoffDate, dropoffTime].forEach((input) =>
    input.addEventListener("input", validateFields)
  );
});