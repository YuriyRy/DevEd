//1. Если а – четное посчитать а*б, иначе а+б

function multiplication (a, b) {
    if (a % 2 === 0) {
        return a*b;
    }else {
        return a+b;
    }
}
//console.log(multiplication(2, 9))
//console.log(multiplication(-3, 6))

// 2. Определить какой четверти принадлежит точка с координатами (х,у)
function decartDistance (x, y) {
    if (x > 0 && y > 0) {
        return 'I'
    }
    else if (x < 0 && y < 0) {
        return 'III'
    }
    else if (x > 0 && y < 0) {
        return 'II'
    }
    else if (x < 0 && y > 0) {
        return 'IV'
    }
    else {
        return 'Zero point'
    }
}
/* console.log(decartDistance(0, -2))
console.log(decartDistance(5, 2))
console.log(decartDistance(-1, 4))
console.log(decartDistance(3, -2))
console.log(decartDistance(-4, -7)) */

// 3. Найти суммы только положительных из трех чисел
function positiveSum (a, b, c) {
    let sum = 0
    if (a > 0) {
        sum += a;
    } else if (b > 0) {
        sum += b;
    } else if (c > 0) {
        sum += c;
    }
    return sum
}
/* console.log(positiveSum(2, 5, -3))
console.log(positiveSum(-2, 5, -3)) */

// 4.Посчитать выражение (макс(а*б*с, а+б+с))+3
function multipl () {
    var numb = 0;
    if (a*b*c > a+b+c) {
        max = a*b*c+3;
    }else {
        max = a + b + c + 3;
    }
    return max
}

// 5.Написать программу определения оценки студента по его рейтингу, на основе следующих правил

function student (rating) {
    if (rating >= 0 && rating <= 19){
        return "F";
 }
    if (rating >= 20 && rating <= 39){
        return "E";
 }
    if (rating >= 40 && rating <= 59){
        return "D";
 }
    if (rating >= 60 && rating <= 74){
        return "C";
 }
    if (rating >= 75 && rating <= 89){
        return "B";
 }
    if (rating >= 90 && rating <= 90){
        return "A";
 }
}
