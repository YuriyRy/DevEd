// 1. Найти сумму четных чисел и их количество в диапазоне от 1 до 99
function EvenCountAndSum() {
    let counter = 0;
    let sum = 0;
    for (let i=1; i<=100; i++) {
        if (i%2 == 0) {
            counter++;
            sum += i;
        }
    }
    return 'Sum: ' + sum + ' - ' + 'Count: ' + counter  
}
console.log(EvenCountAndSum())

// 2. Проверить простое ли число? (число называется простым, если оно делится только само на себя и на 1)
function isPrime (number) {
    for (let i=2; i<number; i++) {
        if (number % i == 0) {
            return false
        }
    }
    return true
}
console.log(isPrime(17))
console.log(isPrime(16))
