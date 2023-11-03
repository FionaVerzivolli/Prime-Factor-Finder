function isPrime(num) {
    if (num < 2) {
        return false;
    }

    for (let divisor = 2; divisor <= Math.floor(Math.sqrt(num)); divisor++) {
        if (num % divisor === 0) {
            return false;
        }
    }

    return true;
}

function listOfPrimes(num) {
    let primes = [];
    if (num <= 1) {
        return [];
    }
    for (let i = 2; i <= Math.floor(num / 2); i++) {
        if (isPrime(i)) {
            primes.push(i);
        }
    }
    return primes;
}

function factorization(num) {
    let divisors = [];
    let primeDivisors = listOfPrimes(num);
    if (isPrime(num)) {
        return [num];
    }
    while (num !== 1) {
        for (let i of primeDivisors) {
            if (num % i === 0) {
                divisors.push(i);
                num = num / i;
                break;
            }
        }
    }
    return divisors;
}
