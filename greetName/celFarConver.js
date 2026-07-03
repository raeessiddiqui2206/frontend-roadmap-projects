function celcius(celValue){
    return (celValue * 9) /5 + 32;
}


function fahrenheit(farValue){
    return ((farValue - 32)*5) / 9 ;    
}

function printIng(cel, far){
    return `${cel} ${far}`;
}

const fahrenheits = celcius(25);
console.log(printIng(fahrenheits, 'F'));
const celsiuss = fahrenheit(68);
console.log(printIng(celsiuss, 'C'));
const freezingFahrenheit = celcius(0);
console.log(printIng(freezingFahrenheit, 'F'));
const freezingCelsius = fahrenheit(32);
console.log(printIng(freezingCelsius, 'C'));
 
