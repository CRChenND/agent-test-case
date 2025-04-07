document.addEventListener("DOMContentLoaded", function () {
    const searchBtn = document.querySelector(".search-button");
    const eticket = document.getElementById("eticket");
    const firstName = document.getElementById("firstName");
    const lastName = document.getElementById("lastName");
    const radios = document.querySelectorAll('input[name="searchBy"]');
  
    function validateForm() {
      const ticketSelected = document.getElementById("ticket").checked;
      const cardSelected = document.getElementById("card").checked;
  
      const hasEticket = eticket.value.trim().length > 0;
      const hasFirst = firstName.value.trim().length > 0;
      const hasLast = lastName.value.trim().length > 0;
  
      const isValid = (ticketSelected || cardSelected) && hasEticket && hasFirst && hasLast;
  
      searchBtn.disabled = !isValid;
      searchBtn.style.opacity = isValid ? "1" : "0.5";
      searchBtn.style.cursor = isValid ? "pointer" : "not-allowed";
    }
  
    // Bind all events
    [eticket, firstName, lastName].forEach(input => {
      input.addEventListener("input", validateForm);
    });
  
    radios.forEach(radio => {
      radio.addEventListener("change", validateForm);
    });
  
    // Initial state
    validateForm();
  
    // Hook submission to downloadLog only when valid
    searchBtn.addEventListener("click", function (e) {
      if (searchBtn.disabled) {
        e.preventDefault();
        alert("Please fill in all required fields.");
      } else {
        alert("Task complete!");
        downloadLog();
      }
    });
  });