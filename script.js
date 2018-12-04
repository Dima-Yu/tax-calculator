function init() {
  calcTax();
}

function calcTax() {

  var formField = {
    carValue: document.querySelector('.car-value'),
    carAge: document.querySelector('.car-age'),
    engineCapacity: document.querySelector('.engine-capacity'),
    engineType: document.querySelector('.engine-type'),
    calcBtn: document.querySelector('.js-calc-btn')
  }

  var resultTableCell = {
    carValue: document.querySelector('.js-car-value'),
    engineCapacity: document.querySelector('.js-engine-capacity'),
    totalRate: document.querySelector('.js-total-rate'),
    exciseRate: document.querySelector('.js-excise-rate'),
    totalExcise: document.querySelector('.js-total-excise'),
    incomeTaxBasis: document.querySelector('.js-income-tax-basis'),
    totalIncomeTax: document.querySelector('.js-total-income-tax'),
    totalValue: document.querySelector('.js-total-value')
  }

  var params = {
    carValue: null,
    carAge: null,
    engineCapacity: null,
    engineType: null,
    exciseRate: null,
    rateOfFee: 0.1,
    incomeTax: 0.2
  }

  var totals = {
    fee: null,
    exice: null,
    incomeTaxBasis: null,
    incomeTax: null,
    value: null
  }

  formField.carValue.onblur = function(){params.carValue = this.value;}
  formField.carAge.onblur = function(){params.carAge = this.value;}
  formField.engineCapacity.onblur = function(){params.engineCapacity = this.value;}

  formField.engineType.onchange = function(){
    var selectedOption = this.options[this.selectedIndex].value;
    params.exciseRate = selectedOption == 'gas' ? 50 : 75;
  }

  function feeCalc() {
    totals.fee = params.carValue * params.rateOfFee;
  }

  function exiceCalc() {
    totals.exice = params.exciseRate * (params.engineCapacity / 1000) * params.carAge;
  }

  function incomeTaxCalc() {
    totals.incomeTaxBasis = + params.carValue + totals.fee + totals.exice;
    totals.incomeTax = totals.incomeTaxBasis * params.incomeTax;
  }

  function totalValueCalc() {
    totals.value = totals.fee + totals.exice + totals.incomeTax;
  }

  formField.calcBtn.onclick = function() {
    calculate();
    updateDataTable();
  }

  function updateDataTable() {
    resultTableCell.carValue.innerHTML = params.carValue;
    resultTableCell.engineCapacity.innerHTML = params.engineCapacity + ' cm3';
    resultTableCell.exciseRate.innerHTML = params.exciseRate + '€';
    resultTableCell.totalRate.innerHTML = totals.fee;
    resultTableCell.totalExcise.innerHTML = totals.exice;
    resultTableCell.incomeTaxBasis.innerHTML = totals.incomeTaxBasis;
    resultTableCell.totalIncomeTax.innerHTML = totals.incomeTax;
    resultTableCell.totalValue.innerHTML = totals.value;
  }

  function calculate(){
    feeCalc();
    exiceCalc();
    incomeTaxCalc();
    totalValueCalc();
  }


}

addEventListener('load', init);
