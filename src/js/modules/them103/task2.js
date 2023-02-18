export const them103_2 = () => {
	let parent = document.querySelector('#them103_2_parent');
	let num1 = parent.querySelector('#num1');
	let num2 = parent.querySelector('#num2');
	let num3 = parent.querySelector('#num3');
	let p = parent.querySelector('p');

	num1.addEventListener('click', () => {
		fetch("/them103_2/?num=0").then(response => response.text()).then(text => p.innerHTML = text);
	});

	num2.addEventListener('click', () => {
		fetch("/them103_2/?num=1").then(response => response.text()).then(text => p.innerHTML = text);
	});

	num3.addEventListener('click', () => {
		fetch("/them103_2/?num=2").then(response => response.text()).then(text => p.innerHTML = text);
	});

}