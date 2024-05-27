const footerWrapper = document.createElement('div');
footerWrapper.className = 'footer-wrapper';
footerWrapper.innerHTML = `
			<footer>
				<div>
					<div class="logos">
						<div class="logo" id="logo-1"><img src="assets/logos/autism_europe__logo.png" alt="Autism Europe logo">
						</div>
						<div class="logo" id="logo-2"><img src="assets/logos/qmu__logo.png" alt="Queen Margaret University logo">
						</div>
						<div class="logo" id="logo-3"><img src="assets/logos/edi_uni__logo.png" alt="Edinburgh University
							logo"></div>
						<div class="logo" id="logo-4"><img src="assets/logos/firah__logo.png" alt="Firah logo"></div>
						<div class="logo" id="logo-5"><img src="assets/logos/bilingualism_matters__logo.png"
								alt="Bilingualism Matters logo"></div>
					</div>
					<p class="footer--copyright">© Autism and Bilingualism</p>
				</div>
				<nav class="nav-footer">
					<ul>
						<li><a href="families/">Families</a></li>
						<li><a href="about.html">About</a></li>
						<li><a href="contact.html">Contact</a></li>
						<li><a href="practitioners/">Practitioners</a></li>
					</ul>
				</nav>
				<div>
					<button class="back-to-top" aria-label="Back to top">
						<img src="assets/icons/back_to_top.svg" alt="back to top">
					</button>
					<div class="socials-wrapper">
						<div class="social">
							<!-- <a href="https://www.facebook.com" target="_blank"><img src="assets/logos/facebook__logo.png" -->
							<!-- 		alt="facebook logo"></a> -->
						</div>
						<div class="social">
							<a href="https://www.x.com/rachaelvdavis" target="_blank"><img src="assets/logos/x__logo.png" alt="x
							logo"></a>
						</div>
					</div>
				</div>
			</footer>
`

// add footer
main.after(footerWrapper);

const scrollTopBtn = document.querySelector('.back-to-top');

scrollTopBtn.addEventListener('click', () => {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
})

