function calculateGCD(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

function findLeastCommonMultiple(num1, num2) {
    const greatestCommonDivisor = calculateGCD(Math.max(num1, num2), Math.min(num1, num2));
    return (num1 * num2) / greatestCommonDivisor;
}
