let url = 'https://test-site.pockethost.io/api/collections/forms/records';
let formWrapper = document.querySelector('.form-wrapper');
let form = document.querySelector('form');
let type = document.querySelector('#type');
let howFoundSite = document.querySelector('#how-found-site');
let inputOtherDetail = document.querySelector('#other-detail');
let recommendationSelect = document.querySelector('#recommendation-select');


function showHideEl(el, e) {
	let prefix = el.id.split('-')[0];
	if (e.target.type == 'radio' && e.target.id !== prefix) {
		el.style = 'display: none';
	} else if (e.target.id == prefix) {
		el.style = 'display: block';
		if (el.type == 'text') el.value = '';
	}
}

function replacePairs(obj, pairs) {
	let arr = Object.keys(obj).map((key) => [String(key).replaceAll(pairs[0][0], pairs[0][1]), obj[key].replaceAll(pairs[0][0], pairs[1][1])])
	let newObj = Object.fromEntries(arr);
	return newObj;
}

type.addEventListener('click', (e) => {
	console.log('hi')
	showHideEl(inputOtherDetail, e);
})

howFoundSite.addEventListener('click', (e) => {
	showHideEl(recommendationSelect, e);
})

form.addEventListener('submit', (e) => {
	e.preventDefault();
	let data = new FormData(form);
	fetch(url, {
		method: 'post',
		body: data
	}).then((res) => {
		formWrapper.innerHTML = `
          <div class="success">
          <h3>🥳 <strong>Thank you</strong>, we have received your
        feedback.</h3>
          </div>
        `
		console.log(res);
	})
})

