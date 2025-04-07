document.addEventListener("DOMContentLoaded", function () {
	const ticketInput = document.getElementById("ticket-number");
	const lastNameInput = document.getElementById("last-name");
	const submitBtn = document.getElementById("submit");

	function validateModalForm() {
		const isValid =
			ticketInput.value.trim().length > 0 && lastNameInput.value.trim().length > 0;
		submitBtn.disabled = !isValid;
		submitBtn.style.opacity = isValid ? "1" : "0.5";
		submitBtn.style.cursor = isValid ? "pointer" : "not-allowed";
	}

	[ticketInput, lastNameInput].forEach((input) =>
		input.addEventListener("input", validateModalForm)
	);

	validateModalForm(); // initialize state

	// Optional: Enhance keyboard UX with Enter key handling
	submitBtn.addEventListener("keydown", function (event) {
		if (event.key === "Enter" && submitBtn.disabled) {
			event.preventDefault();
		}
	});
});