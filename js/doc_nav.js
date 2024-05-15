// toc navigation
const options = {
	root: null,
	rootMargin: "0px 0px -99% 0px",
	threshold: 0.0
}
const observer = new IntersectionObserver(entries => {
	entries.forEach(entry => {
		const id = entry.target.getAttribute('id');
		if (entry.isIntersecting) {
			document.querySelector(`.document__toc li a[href="#${id}"]`).parentElement.classList.add('active')
		} else {
			console.log(entry.isIntersecting)
			document.querySelector(`.document__toc li a[href="#${id}"]`).parentElement.classList.remove('active')
		}
	})
}, options)
// track all sections that have an 'id' applied
document.querySelectorAll('section[id]').forEach((section) => {
	observer.observe(section)
})


// reference highlighting
const highlightCol = getComputedStyle(document.documentElement).getPropertyValue('--color-highlight');
let ref;

document.querySelector('main').addEventListener('click', (e) => {
	if (e.target.parentNode.localName == 'sup') {
		let ref = document.getElementById(`ref-${e.target.textContent}`);

		// set backgroung to highlight colour
		ref.firstElementChild.style.background = highlightCol;
		ref.firstElementChild.style.transition = 'background 400ms'

		// after 2 seconds become 100% transparent (last two digits define this behaviour)
		setTimeout(() => {
			ref.firstElementChild.style.background = '#FFFFFF00';
		}, '2000')
	}
})
// collapsible containers
let containers = document.querySelectorAll('.collapsible-container');

containers.forEach(container => {
	const opener = container.querySelector('h3');
	console.log(opener)
	opener.addEventListener('click', () => {
		[...containers].filter(c => c !== container).forEach(c => c.classList.remove('opened'));
		container.classList.toggle('opened');
	})
})
