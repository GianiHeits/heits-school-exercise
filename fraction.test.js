var Fraction = require("./fraction.js");
test("verifies value fetching", () => {
  expect(new Fraction(0).getIntegerValue()).toBe(0);
});

test("verifies addition without denominator", () => {
  expect(new Fraction(0).add(new Fraction(0)).getIntegerValue()).toBe(0);
  expect(new Fraction(3).add(new Fraction(0)).getIntegerValue()).toBe(3);
  expect(new Fraction(0).add(new Fraction(5)).getIntegerValue()).toBe(5);
});

test("verifies 1/5+2/5=3/5", () => {
  expect(new Fraction(1, 5).add(new Fraction(2, 5)).getNumerator()).toBe(3);
  expect(new Fraction(1, 5).add(new Fraction(2, 5)).getDenominator()).toBe(5);
});

test("verifies 1/6+2/6=3/6", () => {
  expect(new Fraction(1, 6).add(new Fraction(2, 6)).getNumerator()).toBe(3);
  expect(new Fraction(1, 6).add(new Fraction(2, 6)).getDenominator()).toBe(6);
});

test("verifies 1/2+1/3=5/6", () => {
  expect(new Fraction(1, 2).add(new Fraction(1, 3)).getNumerator()).toBe(5);
  expect(new Fraction(1, 2).add(new Fraction(1, 3)).getDenominator()).toBe(6);
});