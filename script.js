function init() {
  calcTax();
}

function calcTax() {
  var carValueField = document.querySelector('.car-value');
  var carAgeField = document.querySelector('.car-age');
  var engineCapacityField = document.querySelector('.engine-capacity');
  var engineTypeField = document.querySelector('.engine-type');
  var calcBtn = document.querySelector('.js-calc-btn');

  var carValueCell = document.querySelector('.js-car-value');
  var engineCapacityCell = document.querySelector('.js-engine-capacity');
  var totalRateCell = document.querySelector('.js-total-rate');
  var exciseRateCell = document.querySelector('.js-excise-rate');
  var totalExciseCell = document.querySelector('.js-total-excise');
  var incomeTaxBasisCell = document.querySelector('.js-income-tax-basis');
  var totalIncomeTaxCell = document.querySelector('.js-total-income-tax');
  var totalValueCell = document.querySelector('.js-total-value');

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
    carValueCell.innerHTML = params.carValue;
    engineCapacityCell.innerHTML = params.engineCapacity + ' cm3';
    exciseRateCell.innerHTML = params.exciseRate + '€';
    totalRateCell.innerHTML = totals.fee;
    totalExciseCell.innerHTML = totals.exice;
    incomeTaxBasisCell.innerHTML = params.incomeTaxBasis;
    totalIncomeTaxCell.innerHTML = params.incomeTaxBasis;
    totalValueCell.innerHTML = totals.value;
  }

  function calculate(){
    feeCalc();
    exiceCalc();
    incomeTaxCalc();
    totalValueCalc();
  }


}

addEventListener('load', init);
