document.addEventListener("DOMContentLoaded", function () {
    if (typeof initLogger === "function") {
      initLogger("dd.json");
    }
  
    const btn = document.querySelector(".search-btn");
    const pickupLocation = document.querySelector('.form-control[placeholder="Pick-up location"]');
    const pickupDate = document.getElementById("pick-up-date");
    const pickupTime = document.getElementById("pick-up-time");
    const dropoffDate = document.getElementById("drop-off-date");
    const dropoffTime = document.getElementById("drop-off-time");
  
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
  
    // Run validation on page load and input events
    validateFields();
  
    [pickupLocation, pickupDate, pickupTime, dropoffDate, dropoffTime].forEach((input) =>
      input.addEventListener("input", validateFields)
    );
  
    btn.addEventListener("click", function (event) {
      event.preventDefault(); // Prevent default link action
      validateFields();
  
      if (!btn.disabled) {
        alert("Task complete!");
        if (typeof downloadLog === "function") {
          downloadLog();
        }
      }
    });
  });