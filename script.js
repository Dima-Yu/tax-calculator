"use strict";

function init() {
  taxCalc();
}

function taxCalc() {

  let formField = {
    carValue: document.querySelector('.car-value'),
    carAge: document.querySelector('.car-age'),
    engineCapacity: document.querySelector('.engine-capacity'),
    engineType: document.querySelector('.engine-type'),
    calcBtn: document.querySelector('.js-calc-btn')
  }

  let resultTableCell = {
    carValue: document.querySelector('.js-car-value'),
    engineCapacity: document.querySelector('.js-engine-capacity'),
    totalRate: document.querySelector('.js-total-rate'),
    exciseRate: document.querySelector('.js-excise-rate'),
    totalExcise: document.querySelector('.js-total-excise'),
    incomeTaxBasis: document.querySelector('.js-income-tax-basis'),
    totalIncomeTax: document.querySelector('.js-total-income-tax'),
    totalValue: document.querySelector('.js-total-value')
  }

  let params = {
    carValue: null,
    carAge: null,
    engineCapacity: null,
    engineType: null,
    exciseRate: null,
    rateOfFee: 0.1,
    incomeTax: 0.2
  }

  let totals = {
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
    let selectedOption = this.options[this.selectedIndex].value;
    params.exciseRate = selectedOption == 'gas' ? 50 : 75;
  }

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

  formField.calcBtn.onclick = function() {
    let result = new Calculation().call();
  }

}

addEventListener('load', init);
