var Fraction = require('./fraction.js');

test('verifies value fetching', () => {
    expect(new Fraction(0).getIntegerValue()).toBe(0);
});

test('verifies addition without denominator', () => {
    expect(new Fraction(0).add(new Fraction(0))).toBe(0);
    expect(new Fraction(3).add(new Fraction(0))).toBe(3);
});