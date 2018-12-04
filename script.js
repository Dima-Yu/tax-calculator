function init() {
  calcTax();
}

function calcTax() {
  var carValueField = document.querySelector('.car-value');
  var carAgeField = document.querySelector('.car-age');
  var engineCapacityField = document.querySelector('.engine-capacity');
  var engineTypeField = document.querySelector('.engine-type');

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
  var rateOfFee = 0.1;
  var incomeTax = 0.2;

  var totalFee;
  var totalExice;
  var totalIncomeTax;
  var totalValue;



  carValueField.onblur = function(){
    carValue = this.value;
    carValueCell.innerHTML = carValue;
    feeCalc();
  }

  carAgeField.onblur = function(){carAge = this.value;}

  engineCapacityField.onblur = function(){
    engineCapacity = this.value;
    engineCapacityCell.innerHTML = engineCapacity + ' cm3';
  }

  engineTypeField.onchange = function(){
    var selectedOption = this.options[this.selectedIndex].value;
    exciseRate = selectedOption == 'gas' ? 50 : 75;
    exciseRateCell.innerHTML = exciseRate + '€';

    exiceCalc();
    totalValueCalc();
  }

  function feeCalc() {
    totalFee = carValue * rateOfFee;
    totalRateCell.innerHTML = totalFee;
  }

  function exiceCalc() {
    if(exciseRate, engineCapacity, carAge != undefined) {
      totalExice = exciseRate * (engineCapacity / 1000) * carAge;
      totalExciseCell.innerHTML = totalExice;
    }
    incomeTaxCalc();
  }

  function incomeTaxCalc() {
    var incomeTaxBasis = + carValue + totalFee + totalExice;
    incomeTaxBasisCell.innerHTML = incomeTaxBasis;

    totalIncomeTax = incomeTaxBasis * incomeTax;
    totalIncomeTaxCell.innerHTML = incomeTaxBasis;
  }

  function totalValueCalc() {
    totalValue = totalFee + totalExice + totalIncomeTax;
    totalValueCell.innerHTML = totalValue;
  }


}

addEventListener('load', init);
