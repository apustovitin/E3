/* Напишите функцию, которая принимает два числа. Каждую секунду необходимо выводить в консоль, 
начиная от первого и заканчивая вторым. Используйте setInterval.
Например, пользователь ввёл числа 5 и 15. Каждую секунду в консоль должно печататься число, 
начиная с 5 и заканчивая 15 (всего 11 чисел: 5 6 7 8 9 10 11 12 13 14 15).. */
function printCounter(input1, input2) {
	let counter = 0;
	const intervalId = setInterval(function (num1, num2) {
		if (num2 >= (num1 + counter)) {
			console.log(num1 + counter);
			counter++;
		} else {
			clearInterval(intervalId);
		}
	}, 1000, input1, input2);
}
printCounter(5, 15)