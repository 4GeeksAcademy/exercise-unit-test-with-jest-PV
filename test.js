// Import the function sum from the app.js file
const { sum } = require('./app.js');

// Start your first test
test('adds 14 + 9 to equal 23', () => {
    // Inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // We expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});

    // Test de Euro a Dolar

test("One euro should be 1.07 dollars", function() {
    // Importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js');

    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 3.5 * 1.07;

    // Hago mi comparación (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})


    //Test fromDollarToYen
test("One dollar should be 146.26 yen", function() {
    const { fromDollarToYen } = require('./app.js');

    const result = fromDollarToYen(1); 
    const expected = (1 / 1.07) * 156.5;

    expect(result).toBeCloseTo(expected, 2);
})

test("One yen should be 0.00556 pounds", function() {
    const { fromYenToPound } = require('./app.js');

    const result = fromYenToPound(1); 
    const expected = (1 / 156.5) * 0.87;


    expect(result).toBeCloseTo(expected, 5); 
});