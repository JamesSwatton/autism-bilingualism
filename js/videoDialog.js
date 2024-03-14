const watchBtn = document.querySelector('#watch-video');
const dialog = document.querySelector('#video-dialog');
const iframe = document.querySelector('iframe');
const src = iframe.src;


watchBtn.addEventListener('click', () => {
	console.log('hello')
	iframe.src = src;
	dialog.showModal();
})

dialog.addEventListener('click', (e) => {
	if (e.target == dialog) {
		iframe.src = '';
		dialog.close();
	}
})
