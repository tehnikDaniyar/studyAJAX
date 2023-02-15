export const them102_1 = () => {
	let div = document.querySelector('#them102_1_div');
	let button = document.querySelector('#them102_1_button');

	button.addEventListener('click', () => {
		fetch('./AJAX/them102/AJAX1.html').then(response => response.text()).then(text => div.innerHTML = text);
	})
};