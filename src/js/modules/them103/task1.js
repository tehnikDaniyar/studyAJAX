export const them103_1 = () => {
	let parent = document.querySelector('#them103_1_parent');
	let div = parent.querySelector('div');
	let button = parent.querySelector('button');

	button.addEventListener('click', () => {
		fetch('/handler/?num=3').then(response => response.text()).then(text => div.innerHTML = text);
	});


}