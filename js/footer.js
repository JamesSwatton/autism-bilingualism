const scrollTopBtn = document.querySelector('.back-to-top');

scrollTopBtn.addEventListener('click', () => {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
})
