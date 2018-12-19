class Calculation {
  feeCalc() {
    totals.fee = params.carValue * params.rateOfFee;
  }
  exiceCalc() {
    totals.exice = params.exciseRate * (params.engineCapacity / 1000) * params.carAge;
  }
  incomeTaxCalc() {
    totals.incomeTaxBasis = + params.carValue + totals.fee + totals.exice;
    totals.incomeTax = totals.incomeTaxBasis * params.incomeTax;
  }
  totalValueCalc() {
    totals.value = totals.fee + totals.exice + totals.incomeTax;
  }

  call(){
    this.feeCalc();
    this.exiceCalc();
    this.incomeTaxCalc();
    this.totalValueCalc();

    resultTableCell.carValue.innerHTML = params.carValue;
    resultTableCell.engineCapacity.innerHTML = params.engineCapacity + ' cm3';
    resultTableCell.exciseRate.innerHTML = params.exciseRate + '€';
    resultTableCell.totalRate.innerHTML = totals.fee;
    resultTableCell.totalExcise.innerHTML = totals.exice;
    resultTableCell.incomeTaxBasis.innerHTML = totals.incomeTaxBasis;
    resultTableCell.totalIncomeTax.innerHTML = totals.incomeTax;
    resultTableCell.totalValue.innerHTML = totals.value;
  }
}
