const sum = (a,b) => {
    return a + b
}

// Just a console log for ourselves
console.log(sum(7,3))

// Export the function to be used on other files 
// (similar to the keyword "export" when using webpack)



// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}


const fromDollarToYen = function(valueInDollar) {
    let euro = valueInDollar / 1.07;
    let valueInYen = euro * 156.5;
    return valueInYen;
}


const fromYenToPound = function( valueInYen) {
    let euro = valueInYen / 156.5;
    let valueInPound = euro * 0.87;
    return valueInPound;
}

    // (similar to the keyword "export" when using webpack)
module.exports = { sum, fromEuroToDollar, fromDollarToYen,fromYenToPound };