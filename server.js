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
};
