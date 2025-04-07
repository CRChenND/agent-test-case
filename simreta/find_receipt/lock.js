document.addEventListener("DOMContentLoaded", function () {
  const searchBtn = document.querySelector(".search-button");
  const eticket = document.getElementById("eticket");
  const firstName = document.getElementById("firstName");
  const lastName = document.getElementById("lastName");
  const ticketRadio = document.getElementById("ticket");
  const cardRadio = document.getElementById("card");

  if (!searchBtn || !eticket || !firstName || !lastName || !ticketRadio || !cardRadio) return;

  function validateForm() {
    const ticketSelected = ticketRadio.checked;
    const cardSelected = cardRadio.checked;

    const hasEticket = eticket.value.trim().length > 0;
    const hasFirst = firstName.value.trim().length > 0;
    const hasLast = lastName.value.trim().length > 0;

    const isValid = (ticketSelected || cardSelected) && hasEticket && hasFirst && hasLast;

    searchBtn.disabled = !isValid;
    searchBtn.style.opacity = isValid ? "1" : "0.5";
    searchBtn.style.cursor = isValid ? "pointer" : "not-allowed";
  }

  [eticket, firstName, lastName].forEach(input => {
    input.addEventListener("input", validateForm);
  });

  [ticketRadio, cardRadio].forEach(radio => {
    radio.addEventListener("change", validateForm);
  });

  validateForm(); // 初始化
});