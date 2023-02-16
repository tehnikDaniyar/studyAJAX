export const them102_1_1 = () => {
	let parent = document.querySelector("#them102_1-1_parent");
	let div = parent.querySelector("#them102_1-1_div");
	parent.addEventListener('click', (event) => {
		if (event.target.textContent == '1') {
			fetch('./AJAX/them102/task1-1/page1.html')
				.then(response => response.text())
				.then(text => div.innerHTML = text);
		};

		if (event.target.textContent == '2') {
			fetch('./AJAX/them102/task1-1/page2.html')
				.then(response => response.text())
				.then(text => div.innerHTML = text);
		};

		if (event.target.textContent == '3') {
			fetch('./AJAX/them102/task1-1/page3.html')
				.then(response => response.text())
				.then(text => div.innerHTML = text);
		};
	})
}