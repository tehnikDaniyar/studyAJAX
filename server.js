export default {
	// '/handler/': ({ get }) => {
	// 	return get.num ** 2;
	// }
	'/handler/': get => get.get.num ** 2,
	'/them103_1-1/': get => +get.get.num1 + +get.get.num2,
	'/them103_2/': get => ['elem1', 'elem2', 'elem3'][get.get.num],
};
