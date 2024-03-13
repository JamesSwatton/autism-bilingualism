let questions = document.querySelectorAll('.question-wrapper');

questions.forEach(question => {
	const opener = question.querySelector('p');
	opener.addEventListener('click', () => {
		// close all other questions
		[...questions].filter(q => q !== question).forEach(q => q.classList.remove('opened'));

		// then open the current selected question
		question.classList.toggle('opened');
	})
})
