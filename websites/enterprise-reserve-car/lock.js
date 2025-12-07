document.addEventListener("DOMContentLoaded", function () {
    const submitBtn = document.getElementById("submit");

    const defaultPickupDate = "2025-03-21";
    const defaultPickupTime = "12:00";
    const defaultReturnDate = "2025-03-22";
    const defaultReturnTime = "12:00";

    const pickupDate = document.getElementById("pickup-date");
    const pickupTime = document.getElementById("pickup-time");
    const returnDate = document.getElementById("return-date");
    const returnTime = document.getElementById("return-time");

    function pickupChanged() {
        return (
            pickupDate.value !== defaultPickupDate ||
            pickupTime.value !== defaultPickupTime
        );
    }

    function returnChanged() {
        return (
            returnDate.value !== defaultReturnDate ||
            returnTime.value !== defaultReturnTime
        );
    }

    function checkFields() {
        const locationFilled = document.getElementById("pickup-location").value.trim() !== "";
        const ageSelected = document.getElementById("renter-age").value !== "";

        // 🚨 同时修改 pickup 和 return 才可以启用按钮
        const bothChanged = pickupChanged() && returnChanged();

        submitBtn.disabled = !(locationFilled && ageSelected && bothChanged);
    }

    // Initial check
    checkFields();

    // Add listeners
    [pickupDate, pickupTime, returnDate, returnTime,
     document.getElementById("pickup-location"), 
     document.getElementById("renter-age")].forEach(el => {
        el.addEventListener("input", checkFields);
        el.addEventListener("change", checkFields);
    });
});
