export const them103_1_1 = () => {
	let parent = document.querySelector('#them103_1-1_parent');
	let button = parent.querySelector('button');
	let div = parent.querySelector('div');

	button.addEventListener('click', () => {
		fetch("/them103_1-1/?num1=1&num2=2")
			.then(response => response.text())
			.then(text => div.innerHTML = text);
	});
};


