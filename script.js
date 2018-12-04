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

  var carValue;
  var carAge;
  var engineCapacity;
  var engineType;
  var exciseRate;
  var incomeTaxBasis;
  const rateOfFee = 0.1;
  const incomeTax = 0.2;

  var totalFee;
  var totalExice;
  var totalIncomeTax;
  var totalValue;



  carValueField.onblur = function(){carValue = this.value;}
  carAgeField.onblur = function(){carAge = this.value;}
  engineCapacityField.onblur = function(){engineCapacity = this.value;}

  engineTypeField.onchange = function(){
    var selectedOption = this.options[this.selectedIndex].value;
    exciseRate = selectedOption == 'gas' ? 50 : 75;
  }

  function feeCalc() {
    totalFee = carValue * rateOfFee;
  }

  function exiceCalc() {
    totalExice = exciseRate * (engineCapacity / 1000) * carAge;
  }

  function incomeTaxCalc() {
    incomeTaxBasis = + carValue + totalFee + totalExice;
    totalIncomeTax = incomeTaxBasis * incomeTax;
  }

  function totalValueCalc() {
    totalValue = totalFee + totalExice + totalIncomeTax;
  }

  calcBtn.onclick = function() {
    calculate();
    updateDataTable();
  }

  function updateDataTable() {
    carValueCell.innerHTML = carValue;
    engineCapacityCell.innerHTML = engineCapacity + ' cm3';
    exciseRateCell.innerHTML = exciseRate + '€';
    totalRateCell.innerHTML = totalFee;
    totalExciseCell.innerHTML = totalExice;
    incomeTaxBasisCell.innerHTML = incomeTaxBasis;
    totalIncomeTaxCell.innerHTML = incomeTaxBasis;
    totalValueCell.innerHTML = totalValue;
  }

  function calculate(){
    feeCalc();
    exiceCalc();
    incomeTaxCalc();
    totalValueCalc();
  }


}

addEventListener('load', init);
