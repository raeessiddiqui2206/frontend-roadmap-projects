function isPositive(number){
    return number > 0;
}

function isNegetive(number){
    return number < 0;
}

function isZero(number){
    return number == 0;
    
}

function isEven(number){
    return number % 2 === 0;


}

function desNum(number){
    return{
        positive: isPositive(number),
        negetive: isNegetive(number),
        zero: isZero(number),
        even: isEven(number),
        odd: !isEven(number),
    };
};

console.log(desNum(8));
console.log(desNum(-3));
console.log(desNum(0));
console.log(desNum(7));
