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

body.style.marginTop = `${headerHeight}px`;

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

langSelectBtn.addEventListener('click', () => {
	langWrapper.classList.toggle("visible");
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
