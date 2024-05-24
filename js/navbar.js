const body = document.querySelector('body');
const header = document.createElement('header');
header.className = 'nav-container';
header.innerHTML = `
		<div class="logo-wrapper">
			<a href="index.html"><img src="assets/logo-large-01.svg" /></a>
		</div>
		<div class="nav-wrapper">
			<div class="nav">
				<nav>
					<ul>
						<li><a href="families/index.html">Families</a></li>
						<li><a href="about.html">About</a></li>
						<li><a href="contact.html">Contact</a></li>
						<li><a href="practitioners/index.html">Practitioners</a></li>
					</ul>
				</nav>
			</div>
		</div>
		<div class="selected-language">
			<p id="language">English</p>
			<div class="lang-icon language-select-btn" role="button" aria-pressed="false">
				<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
					<path
						d="M480-80q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 31.5-155.5t86-127Q252-817 325-848.5T480-880q83 0 155.5 31.5t127 86q54.5 54.5 86 127T880-480q0 82-31.5 155t-86 127.5q-54.5 54.5-127 86T480-80Zm0-82q26-36 45-75t31-83H404q12 44 31 83t45 75Zm-104-16q-18-33-31.5-68.5T322-320H204q29 50 72.5 87t99.5 55Zm208 0q56-18 99.5-55t72.5-87H638q-9 38-22.5 73.5T584-178ZM170-400h136q-3-20-4.5-39.5T300-480q0-21 1.5-40.5T306-560H170q-5 20-7.5 39.5T160-480q0 21 2.5 40.5T170-400Zm216 0h188q3-20 4.5-39.5T580-480q0-21-1.5-40.5T574-560H386q-3 20-4.5 39.5T380-480q0 21 1.5 40.5T386-400Zm268 0h136q5-20 7.5-39.5T800-480q0-21-2.5-40.5T790-560H654q3 20 4.5 39.5T660-480q0 21-1.5 40.5T654-400Zm-16-240h118q-29-50-72.5-87T584-782q18 33 31.5 68.5T638-640Zm-234 0h152q-12-44-31-83t-45-75q-26 36-45 75t-31 83Zm-200 0h118q9-38 22.5-73.5T376-782q-56 18-99.5 55T204-640Z" />
				</svg>
			</div>
		</div>
		<div class="languages-wrapper">
			<ul class="languages-list">
				<li><a href="families/arabic.html">Arabic / عربي</a></li>
				<li><a href="families/bengali.html">Bengali</a></li>
				<li><a href="families/chinese.html">Chinese / 中国人</a></li>
				<li><a href="families/czech.html">Czech / Český</a></li>
				<li><a href="families/">English</a></li>
				<li><a href="families/french.html">French / Français</a></li>
				<li><a href="families/german.html">German / Deutsche</a></li>
				<li><a href="families/greek.html">Greek / Ελληνικά</a></li>
				<li><a href="families/irish.html">Irish / Gaeilge</a></li>
				<li><a href="families/italian.html">Italian / Italiano</a></li>
				<li><a href="families/montenegrin.html">Montenegrin</a></li>
				<li><a href="families/norwegian.html">Norwegian / Norsk</a></li>
				<li><a href="families/polish.html">Polish / Polski</a></li>
				<li><a href="families/portugese.html">Portugese / Português</a></li>
				<li><a href="families/punjabi.html">Punjab / ਪੰਜਾਬ</a></li>
				<li><a href="families/romanian.html">Romanian / Română</a></li>
				<li><a href="families/scottish-gaelic.html">Scottish Gaelic / Gàidhlig na h-Alba</a></li>
				<li><a href="families/somali.html">Somali / Soomaali</a></li>
				<li><a href="families/spanish.html">Spanish / Español</a></li>
				<li><a href="families/turkish.html">Turkish / Türkçe</a></li>
				<li><a href="families/ukrainian.html">Ukranian / українська</a></li>
				<li><a href="families/urdu.html">Urdu / اردو</a></li>
				<li><a href="families/welsh.html">Welsh / Cymraeg</a></li>
			</ul>
		</div>
		<!--Mobile version - hamburger and sidebar-->
		<label class="hamburger-menu">
			<input type="checkbox" id="menu-checkbox">
		</label>

		<aside class="sidebar">
			<nav>
				<ul class="nav__mobile">
					<li>
						<a href="families/">
							<div class="resources-wrapper">
								<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
									<path
										d="M480-80q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 31.5-155.5t86-127Q252-817 325-848.5T480-880q83 0 155.5 31.5t127 86q54.5 54.5 86 127T880-480q0 82-31.5 155t-86 127.5q-54.5 54.5-127 86T480-80Zm0-82q26-36 45-75t31-83H404q12 44 31 83t45 75Zm-104-16q-18-33-31.5-68.5T322-320H204q29 50 72.5 87t99.5 55Zm208 0q56-18 99.5-55t72.5-87H638q-9 38-22.5 73.5T584-178ZM170-400h136q-3-20-4.5-39.5T300-480q0-21 1.5-40.5T306-560H170q-5 20-7.5 39.5T160-480q0 21 2.5 40.5T170-400Zm216 0h188q3-20 4.5-39.5T580-480q0-21-1.5-40.5T574-560H386q-3 20-4.5 39.5T380-480q0 21 1.5 40.5T386-400Zm268 0h136q5-20 7.5-39.5T800-480q0-21-2.5-40.5T790-560H654q3 20 4.5 39.5T660-480q0 21-1.5 40.5T654-400Zm-16-240h118q-29-50-72.5-87T584-782q18 33 31.5 68.5T638-640Zm-234 0h152q-12-44-31-83t-45-75q-26 36-45 75t-31 83Zm-200 0h118q9-38 22.5-73.5T376-782q-56 18-99.5 55T204-640Z" />
								</svg>
								Families
							</div>
						</a>
					</li>
					<ul class="languages-list__mobile">
						<li><a href="families/arabic.html">Arabic / عربي</a></li>
						<li><a href="families/bengali.html">Bengali</a></li>
						<li><a href="families/chinese.html">Chinese / 中国人</a></li>
						<li><a href="families/czech.html">Czech / Český</a></li>
						<li><a href="families/">English</a></li>
						<li><a href="families/french.html">French / Français</a></li>
						<li><a href="families/german.html">German / Deutsche</a></li>
						<li><a href="families/greek.html">Greek / Ελληνικά</a></li>
						<li><a href="families/irish.html">Irish / Gaeilge</a></li>
						<li><a href="families/italian.html">Italian / Italiano</a></li>
						<li><a href="families/montenegrin.html">Montenegrin</a></li>
						<li><a href="families/norwegian.html">Norwegian / Norsk</a></li>
						<li><a href="families/polish.html">Polish / Polski</a></li>
						<li><a href="families/portugese.html">Portugese / Português</a></li>
						<li><a href="families/punjabi.html">Punjab / ਪੰਜਾਬ</a></li>
						<li><a href="families/romanian.html">Romanian / Română</a></li>
						<li><a href="families/scottish-gaelic.html">Scottish Gaelic / Gàidhlig na h-Alba</a></li>
						<li><a href="families/somali.html">Somali / Soomaali</a></li>
						<li><a href="families/spanish.html">Spanish / Español</a></li>
						<li><a href="families/turkish.html">Turkish / Türkçe</a></li>
						<li><a href="families/ukrainian.html">Ukranian / українська</a></li>
						<li><a href="families/urdu.html">Urdu / اردو</a></li>
						<li><a href="families/welsh.html">Welsh / Cymraeg</a></li>
					</ul>
					<li><a href="about.html">About</a></li>
					<li><a href="contact.html">Contact</a></li>
					<li><a href="practitioners/">Practioners</a></li>
			</nav>
		</aside>
`
// add nav to body
body.prepend(header);

// Show/hide header on scroll
// Add padding top to doc__toc 
//
// const header = document.querySelector('header');
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
const regex = new RegExp('families');

if (!regex.test(pathname)) {
	navWrap.style.justifyContent = 'flex-end';
	langSelectBtn.remove();
	selLang.remove();
	langWrapper.remove();
}

// Add selected language text to element
const langContainer = document.querySelector('#language');

function formatFilePath(filePath) {
	let a;
	a = filePath.split('/').pop().split('.')[0].split('-');
	a = a.map(word => {
		return word.replace(word.charAt(0), word.charAt(0).toUpperCase());
	})
	return a.join(' ');
}
const selectedLanguage = formatFilePath(pathname);


if (regex.test(pathname)) {
	if (!selectedLanguage || selectedLanguage == 'Index') {
		langContainer.innerHTML = "English";
	} else {
		langContainer.innerHTML = selectedLanguage;
	}
}

// collapsible containers in document authors
let containers = document.querySelectorAll('.collapsible-container');

containers.forEach(container => {
	const opener = container.querySelector('[role="button"]');
	opener.addEventListener('click', () => {
		[...containers].filter(c => c !== container).forEach(c => c.classList.remove('opened'));
		container.classList.toggle('opened');
	})
})



