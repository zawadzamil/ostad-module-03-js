// *********** a ************ 

function sqrRoot(numbers) {
    let sumOfSquares = 0;
    numbers.forEach(element => {
        let square = Math.pow(element, 2);
        sumOfSquares += square;
    });
    return Math.sqrt(sumOfSquares);
}
//  ************ b ************* 
console.log(sqrRoot([4, 12, 44]))