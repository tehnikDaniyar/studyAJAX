export default {
	// '/handler/': ({ get }) => {
	// 	return get.num ** 2;
	// }
	'/handler/': get => get.get.num ** 2,
	'/them103_1-1/': get => +get.get.num1 + +get.get.num2,
	'/them103_2/': get => ['elem1', 'elem2', 'elem3'][get.get.num],
	'/them104_1/': ({ get }) => {
		console.log(get.num1, get.num2);
		return [get.num1, get.num2];
	},
	'/them104_1-1/': get => +get.get.num1 + +get.get.num2 + +get.get.num3,
	'/them105_1/': get => [get.post.num1, get.post.num2, get.post.num3,],
	'/them105_1-1/': ({ post }) => {
		let summ = 0;
		for (let key in post) {
			summ += +post[key];
		};
		return summ / Object.keys(post).length;
	}
};
