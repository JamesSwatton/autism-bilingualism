// Show/hide header on scroll
//
const header = document.querySelector('header');
const headerHeight = header.offsetHeight;
let lastScrollTop = 0;
let lastHeight = headerHeight;
let newHeight;

console.log(headerHeight)
window.onscroll = () => { scrollHide() };

function scrollHide() {
	let scrollTop = window.scrollY || document.documentElement.scrollTop;

	if (scrollTop > lastScrollTop) {
		header.style.top = `-${headerHeight}px`;
		langWrapper.classList.remove('visible');
	} else {
		header.style.top = "0px";
	}

	lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
}

// Add margin top to body equalling header height
//
const body = document.querySelector('body');

body.style.marginTop = `calc(${header.offsetHeight}px)`;

const resizeObserver = new ResizeObserver(() => {
	newHeight = header.offsetHeight;

	if (newHeight !== lastHeight) {
		body.style.marginTop = `calc(${header.offsetHeight}px)`;
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
const regex = new RegExp('^/resources');
console.log(regex.test(pathname));

if (!regex.test(pathname)) {
	navWrap.style.justifyContent = 'flex-end';
	langSelectBtn.remove();
	selLang.remove();
	langWrapper.remove();
}

