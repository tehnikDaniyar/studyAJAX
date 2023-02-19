export const them104_1_1 = () => {
	const parent = document.querySelector('#them104_1-1_parent');
	let num1 = parent.querySelector('[name="num1"]');
	let num2 = parent.querySelector('[name="num2"]');
	let num3 = parent.querySelector('[name="num3"]');
	let form = parent.querySelector('form');

	let searchParams = new URLSearchParams();

	form.addEventListener('submit', (event) => {
		searchParams.set('num1', num1.value);
		searchParams.set('num2', num2.value);
		searchParams.set('num3', num3.value);

		let url = `/them104_1-1/?${searchParams.toString()}`;

		fetch(url).then(response => response.text()).then(text => parent.innerHTML += `<p>${text}</p>`);
		event.preventDefault();
	})

}