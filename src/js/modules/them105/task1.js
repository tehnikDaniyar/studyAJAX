export const them105_1 = () => {
	const parent = document.querySelector('#them105_1_parent');
	let form = parent.querySelector('form');

	form.addEventListener('submit', function (event) {
		event.preventDefault();
		fetch("them105_1", {
			method: 'POST',
			body: new FormData(this)
		})
			.then(response => response.text())
			.then(text => console.log(text));
	})
}