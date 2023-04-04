let mailField = document.getElementById("mail");
let submit = document.getElementById("submit");
let errorLabel = document.querySelector("form label.error");

submit.addEventListener("click", (e) => {
	mailCheck();
	e.preventDefault();
});

function mailCheck() {
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

	if (emailRegex.test(mailField.value)) {
		// console.log("Valid email address");
		errorLabel.classList.add("hidden");
	} else {
		// console.log("Invalid email address");
		errorLabel.innerHTML = "Please enter a valid email address";
		errorLabel.classList.remove("hidden");
	}
}
