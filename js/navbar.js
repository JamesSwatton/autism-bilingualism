// Show/hide header on scroll
// Add padding top to doc__toc 
//
const header = document.querySelector('header');
const headerHeight = header.offsetHeight;
const docToc = document.querySelector('.document__toc');
let lastScrollTop = 0;
let lastHeight = headerHeight;
let newHeight;

window.onscroll = () => { scrollHide() };

function scrollHide() {
	let scrollTop = window.scrollY || document.documentElement.scrollTop;

	if (scrollTop > lastScrollTop) {
		header.style.top = `-${headerHeight}px`;
		langWrapper.classList.remove('visible');
		if (docToc) { docToc.style.top = `2rem` };
	} else {
		header.style.top = "0px";
		if (docToc) { docToc.style.top = `calc(2rem + ${headerHeight}px)` };
	}

	lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
}

// Add margin top to body equalling header height
//
const body = document.querySelector('body');

body.style.marginTop = `${header.offsetHeight}px`;

const resizeObserver = new ResizeObserver(() => {
	newHeight = header.offsetHeight;

	if (newHeight !== lastHeight) {
		body.style.marginTop = `${header.offsetHeight}px`;
		lastHeight = header.offsetHeight;
		menuCheckbox.checked = false;
	}
})

resizeObserver.observe(header);

// open language select list
//
const langSelectBtn = document.querySelector(".language-select-btn");
const langWrapper = document.querySelector(".languages-wrapper");
const main = document.querySelector('main');

langSelectBtn.addEventListener('click', () => {
	langWrapper.classList.toggle("visible");
})

main.addEventListener('click', () => {
	langWrapper.classList.remove('visible');
})

// Disable scroll on mobile nav menu open
//
const menuCheckbox = document.querySelector('#menu-checkbox');

menuCheckbox.addEventListener('change', (e) => {
	if (e.currentTarget.checked) {
		document.documentElement.style.position = "fixed";
	} else {
		document.documentElement.style.position = "relative";
	}
})

// Remove resource specific nav element if not on resources page
//
const navWrap = document.querySelector('.nav-wrapper');
const selLang = document.querySelector('.selected-language');

const pathname = window.location.pathname;
const regex = new RegExp('^/families');
console.log(regex.test(pathname));

if (!regex.test(pathname)) {
	navWrap.style.justifyContent = 'flex-end';
	langSelectBtn.remove();
	selLang.remove();
	langWrapper.remove();
}

// collapsible containers
let containers = document.querySelectorAll('.collapsible-container');

containers.forEach(container => {
	const opener = container.querySelector('[role="button"]');
	console.log(opener)
	opener.addEventListener('click', () => {
		[...containers].filter(c => c !== container).forEach(c => c.classList.remove('opened'));
		container.classList.toggle('opened');
	})
})
