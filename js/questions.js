let questions = document.querySelectorAll('.question-wrapper');

questions.forEach(question => {
	const opener = question.querySelector('h3');
	opener.addEventListener('click', () => {
		// close all other questions
		[...questions].filter(q => q !== question).forEach(q => q.classList.remove('opened'));

		// then open the current selected question
		question.classList.toggle('opened');
	})
})
