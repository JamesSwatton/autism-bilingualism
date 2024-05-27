let cookieBanner = document.createElement('div');
cookieBanner.id = 'cookie-consent-banner';
cookieBanner.className = 'cookie-consent-banner';
cookieBanner.innerHTML = `
    <h3>Cookie settings</h3>
    <p style="font-family: var(--font-primary)">We use cookies to see how you interact with this site. Our only interest is seeing how these resources are used. <strong>THIS DATA WILL NOT BE USED FOR MARKETING AND WE WILL NEVER SHARED</strong>. Thank you. 🙂</p>
		<button id="decline" class="btn--primary gray">Decline</button>
		<button id="accept" class="btn--primary">Accept</button>
`;

main.append(cookieBanner);

function hideBanner() {
	document.getElementById('cookie-consent-banner').style.display = 'none';
}

if (localStorage.getItem('consentMode') === null) {

	document.getElementById('accept').addEventListener('click', function() {
		let consentMode = {
			'analytics_storage': 'granted'
		};
		gtag('consent', 'update', consentMode);
		localStorage.setItem('consentMode', JSON.stringify(consentMode));
		hideBanner();
	});

	document.getElementById('decline').addEventListener('click', function() {
		let consentMode = {
			'analytics_storage': 'denied'
		};
		gtag('consent', 'update', consentMode);
		localStorage.setItem('consentMode', JSON.stringify(consentMode));
		hideBanner();
	});

	document.getElementById('cookie-consent-banner').style.display = 'block';
} else {
	hideBanner();
}

function setConsent(consent) {
	const consentMode = {
		'functionality_storage': consent.necessary ? 'granted' : 'denied',
		'security_storage': consent.necessary ? 'granted' : 'denied',
		'ad_storage': consent.marketing ? 'granted' : 'denied',
		'analytics_storage': consent.analytics ? 'granted' : 'denied',
		'personalization_storage': consent.preferences ? 'granted' : 'denied',
	};
	gtag('consent', 'update', consentMode);
	localStorage.setItem('consentMode', JSON.stringify(consentMode));
}

