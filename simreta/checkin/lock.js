document.addEventListener("DOMContentLoaded", function () {
  const fromInput = document.getElementById("from");
  const toInput = document.getElementById("destination");
  const startDateInput = document.getElementById("startDate");
  const endDateInput = document.getElementById("endDate");
  const searchBtn = document.querySelector(".submit-btn");

  if (!fromInput || !toInput || !startDateInput || !endDateInput || !searchBtn) return;

  function validateForm() {
    const fromValid = fromInput.value.trim() !== "";
    const toValid = toInput.value.trim() !== "";
    const startDateValid = startDateInput.value !== "";
    const endDateValid = endDateInput.value !== "";

    const allValid = fromValid && toValid && startDateValid && endDateValid;

    searchBtn.disabled = !allValid;
    searchBtn.style.opacity = allValid ? "1" : "0.6";
    searchBtn.style.cursor = allValid ? "pointer" : "not-allowed";
  }

  validateForm();

  [fromInput, toInput, startDateInput, endDateInput].forEach((el) =>
    el.addEventListener("input", validateForm)
  );
});