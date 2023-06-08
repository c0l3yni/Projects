const signupForm = document.getElementById("signup-form");
const allInputs = document.querySelectorAll(".text-input");
const emailRegex = "^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$";
const emptyEmailInputError = "Email cannot be empty";
const invalidEmailError = "Please enter a valid email addres";

const validateEmail = (emailString) => (emailString.match(emailRegex) ? true : false);

const toggleEmailErrorText = (ele) => {
	const isValidEmail = validateEmail(ele.value);

	if (!isValidEmail && ele.value) ele.nextElementSibling.innerHTML = invalidEmailError;
	if (!ele.value) ele.nextElementSibling.innerHTML = emptyEmailInputError;
};

const showError = (ele) => {
	ele.nextElementSibling.classList.add("show-error", "animate-error");
	ele.previousElementSibling.classList.add("show-error", "animate-error");
	ele.classList.add("error-border", "has-error");
};

const removeError = (ele) => {
	ele.previousElementSibling.classList.remove("show-error");
	ele.nextElementSibling.classList.remove("show-error");
	ele.classList.remove("error-border", "has-error");
};

const removeAnimation = (ele) => {
	ele.previousElementSibling.onanimationend = () => {
		ele.previousElementSibling.classList.remove("animate-error");
		ele.nextElementSibling.classList.remove("animate-error");
	};
};

const clearValidForm = (array) => {
	const errorArray = array.filter((input) => input.classList.contains("has-error"));
	if (!errorArray.length) {
		signupForm.reset();

		// delaying the alert for chromium browsers, which apparently runs and blocks the script faster than it takes to run
		setTimeout(() => {
			alert("Thanks! Check the email you signed up with to verify your account.");
		}, 1);
	}
};

const onFormSubmit = (e) => {
	// forEach uniquely works on nodelist object but need actual array to use filter()
	const inputArray = Array.from(allInputs);
	e.preventDefault();

	allInputs.forEach((input) => {
		const emailInput = input.getAttribute("name");
		const invalidEmail = emailInput === "email" && !validateEmail(input.value) && input.value;

		removeAnimation(input);
		removeError(input);
		if (emailInput === "email") toggleEmailErrorText(input);
		if (!input.value || invalidEmail) showError(input);
	});

	clearValidForm(inputArray);
};

signupForm.onsubmit = onFormSubmit;
signupForm.reset();
