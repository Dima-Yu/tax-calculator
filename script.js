function init() {
  calcTax();
}

function calcTax() {
  var carValueField = document.querySelector('.car-value');
  var carAgeField = document.querySelector('.car-age');
  var engineCapacityField = document.querySelector('.engine-capacity');
  var engineTypeField = document.querySelector('.engine-type');
  var calcBtn = document.querySelector('.js-calc-btn');

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
    incomeTaxBasis: null,
    rateOfFee: 0.1,
    incomeTax: 0.2
  }

  var totals = {
    fee: null,
    exice: null,
    incomeTax: null,
    value: null
  }

  carValueField.onblur = function(){params.carValue = this.value;}
  carAgeField.onblur = function(){params.carAge = this.value;}
  engineCapacityField.onblur = function(){params.engineCapacity = this.value;}

  engineTypeField.onchange = function(){
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
    params.incomeTaxBasis = + params.carValue + totals.fee + totals.exice;
    totals.incomeTax = params.incomeTaxBasis * params.incomeTax;
  }

  function totalValueCalc() {
    totals.value = totals.fee + totals.exice + totals.incomeTax;
  }

  calcBtn.onclick = function() {
    calculate();
    updateDataTable();
  }

  function updateDataTable() {
    resultTableCell.carValue.innerHTML = params.carValue;
    resultTableCell.engineCapacity.innerHTML = params.engineCapacity + ' cm3';
    resultTableCell.exciseRate.innerHTML = params.exciseRate + '€';
    resultTableCell.totalRate.innerHTML = totals.fee;
    resultTableCell.totalExcise.innerHTML = totals.exice;
    resultTableCell.incomeTaxBasis.innerHTML = params.incomeTaxBasis;
    resultTableCell.totalIncomeTax.innerHTML = params.incomeTaxBasis;
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
