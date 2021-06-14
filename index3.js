/* Написать функцию, которая принимает число как аргумент и возвращает функцию, 
которая также принимает число как аргумент и возвращает сумму этих двух чисел. 
Выведите в консоль результат. */
function getFirstNumAndCallSumFunction (num1) {
  return function getSecondNumAndSum (num2) {
    return num1 + num2;
  }
}
let func2 = getFirstNumAndCallSumFunction(3);
console.log(func2(5));