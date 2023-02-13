let div = document.querySelector('div');
let button = document.querySelector('button');

button.addEventListener('click', function () {
	fetch('./ajax.html').then(result => result.text()).then(text => div.innerHTML = text);
});