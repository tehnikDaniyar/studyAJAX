export const them105_2 = () => {
	let obj = {
		a: 1,
		b: 2,
		c: 3
	};

	let date = new FormData();

	for (let key in obj) {
		date.set(`${key}`, `${obj[key]}`);
	};

	fetch('/them105_2/', {
		method: "POST",
		body: date,
	})
		.then(response => response.text())
		.then(text => console.log(text))
};