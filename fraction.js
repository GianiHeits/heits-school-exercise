module.exports = class Fraction {
    constructor(numerator, denominator = 1) {
      this.numerator = numerator;
      this.denominator = denominator;
    }
    getIntegerValue() {
      return this.numerator;
    }
  
    add(fraction) {
      if (this.hasSameDenominator(fraction)) {
        const numertorSum = this.getIntegerValue() + fraction.getIntegerValue();
        return new Fraction(numertorSum, this.denominator);
      } else {
        const commonNumerator =
          this.numerator * fraction.denominator +
          fraction.numerator * this.denominator;
        const commonDenominator = this.denominator * fraction.denominator;
        return new Fraction(commonNumerator, commonDenominator);
      }
    }
    getNumerator() {
      return this.numerator;
    }
    getDenominator() {
      return this.denominator;
    }
  
    hasSameDenominator(fraction) {
      return this.denominator == fraction.denominator;
    }
  };