/* В прошлом модуле в разделе «Циклы» вы выполняли следующее задание:
Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве. Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно. 
При выполнении задания необходимо учесть, что массив может содержать не только числа, но и, например, знаки, null и так далее.
На этот раз оформите решение в виде функции, постарайтесь дать этой функции корректное название, вызовите функцию, проанализируйте синтаксис */
function zeroOddEvenCounter(arr) {
	let oddElementsNumber = 0;
	let evenElementsNumber = 0;
	let zeroElementsNumber = 0;
	for (let element of arr) {
		if (typeof element == "number") {
			if (element == 0) {
				++zeroElementsNumber;
				continue;
			} else if ((element % 2) != 0) {
				++oddElementsNumber;
			} else if ((element % 2) == 0) {
				++evenElementsNumber;
			}
		}
	}
	console.log('Количество нулей в массиве arr: ' + zeroElementsNumber);
	console.log('Количество четных чисел в массиве arr: ' + evenElementsNumber);
	console.log('Количество не четных чисел в массиве arr: ' + oddElementsNumber);
}
let arr = [1, 2, 1, 2, 1, 0, "1", 0, 1];
zeroOddEvenCounter(arr);