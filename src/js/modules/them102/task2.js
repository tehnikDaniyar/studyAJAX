export const them102_2 = () => {
	let counter = 0;
	let arrPaths = [
		'./AJAX/them102/task2/page1.html',
		'./AJAX/them102/task2/page2.html',
		'./AJAX/them102/task2/page3.html',
		'./AJAX/them102/task2/page4.html',
		'./AJAX/them102/task2/page5.html'
	];

	let parent = document.querySelector('#them102_2_parent');
	let button = parent.querySelector('button');
	let div = parent.querySelector('div');

	button.addEventListener('click', () => {
		fetch(arrPaths[counter])
			.then(response => response.text())
			.then(text => div.innerHTML = text);
		counter == 4 ? counter = 0 : counter++;
	})
}