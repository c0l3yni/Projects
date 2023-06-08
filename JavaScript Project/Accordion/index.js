const questions = document.querySelectorAll(".question");

questions.forEach((question) => {
	let isOpen = false;

	const toggleAnswer = () => {
		if (isOpen) {
			question.classList.remove("emphasize-question");
			question.firstElementChild.classList.remove("rotate-arrow");
			question.nextElementSibling.classList.add("hide");
		}
		if (!isOpen) {
			question.classList.add("emphasize-question");
			question.firstElementChild.classList.add("rotate-arrow");
			question.nextElementSibling.classList.remove("hide");
		}
		isOpen = !isOpen;
	};

	question.onclick = toggleAnswer;
});
