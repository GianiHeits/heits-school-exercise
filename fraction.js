module.exports = class Fraction {
    constructor(numerator, denominator=1) {
        this.numerator = numerator;
        this.denominator = denominator;
    }
 
    getIntegerValue() {
        return this.numerator;
    }

    add(fraction) {
        return this.getIntegerValue() + fraction.getIntegerValue();
    }
 }