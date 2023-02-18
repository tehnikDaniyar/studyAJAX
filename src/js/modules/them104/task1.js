export const them104_1 = () => {
	let parent = document.querySelector('#them104_1_parent');
	let form = parent.querySelector('form');
	let input1 = parent.querySelector('[name="num1"]');
	let input2 = parent.querySelector('[name="num2"]');
	let submit = parent.querySelector('[type="submit"]');
	let path = "/them104_1/";

	let searchParams = new URLSearchParams();



	submit.addEventListener('click', (event) => {
		event.preventDefault();
		searchParams.set('num1', input1.value);
		searchParams.set('num2', input2.value);
		fetch(path + '?' + searchParams.toString()).then(response => response.text()).then(text => console.log(text));
	})



}