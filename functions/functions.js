// Функции
// 1. Получить строковое название дня недели по номеру дня.
function get_day(number) {
    let days = {
        7: 'Saturday',
        1: 'Monday',
        2: 'Tuesday',
        3: 'Wednesday',
        4: 'Thursday',
        5: 'Friday',
        6: 'Sunday'
    };
      
      return days[number]
}
console.log(get_day(7))


// 2. Найти расстояние между двумя точками в двухмерном декартовом пространстве.
function decart(x, y, a, b) {
    return Math.sqrt(Math.pow((x-a), 2) + Math.pow((y-b), 2))
}

console.log(decart(2, 4, 6, 8))


// 3. Вводим число(0-999), получаем строку с прописью числа.

function number_to_string(number) {
    let numbers = {
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        0: 'zero'
    };
    let result = [];

    while (number / 10 >= 1) {
        result.push(numbers[Math.floor(number % 10)]);
        number = number / 10;
    }
    result.push(numbers[Math.floor(number)]);
    result.reverse()
    return result.join(' ')
}

console.log(number_to_string(456))