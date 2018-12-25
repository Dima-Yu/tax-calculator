class Calculation  {
  constructor(paramsObj) {
    this.paramsObj = paramsObj;
    this.rateOfFee = 0.1; //todo make it const
    this.incomeTax = 0.2; //todo make it const
    this.cm3 = 1000;

    this.totals = {
      fee: null,
      exice: null,
      incomeTaxBasis: null,
      tax: null,
      value: null,
      totalCost: null,
    }
  }

  call() {
    this.feeCalc();
    this.exiceCalc();
    this.incomeTaxCalc();
    this.totalCostCalc();
    console.log(this.paramsObj);
    return this.totals;
  }

  feeCalc() {
    this.totals.fee = this.paramsObj.carValue * this.rateOfFee;
  }

  exiceCalc() {
    this.totals.exice = this.paramsObj.exciseRate * (this.paramsObj.engineCapacity / this.cm3) * this.paramsObj.carAge;
  }

  incomeTaxCalc() {
    this.totals.incomeTaxBasis = + this.paramsObj.carValue + this.totals.fee + this.totals.exice;
    this.totals.tax = this.totals.incomeTaxBasis * this.incomeTax;
  }

  totalCostCalc() {
    this.totals.totalCost = this.totals.fee + this.totals.exice + this.totals.tax;
  }
}
