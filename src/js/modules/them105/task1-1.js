export const them105_1_1 = () => {
	const parent = document.querySelector('#them105_1-1_parent');
	let form = parent.querySelector('form');

	form.addEventListener('submit', function (event) {
		event.preventDefault();
		fetch('/them105_1-1/', {
			method: "POST",
			body: new FormData(form)
		})
			.then(response => response.text())
			.then(text => console.log(text))
	})
}