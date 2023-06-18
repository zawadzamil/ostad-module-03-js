// *********** a *********** 

let checkPrime = (n) => {
    for (i = 2; i < n; i++) {
        if (n % i == 0 && n != i) return false;
    }
    return true;
}

function isPrime(n) {
    if (n < 2) return false;
    return checkPrime(n);
}

// ************* b ************* 
console.log(isPrime(251));

