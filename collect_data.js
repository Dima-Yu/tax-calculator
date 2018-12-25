// + зібрати дані з інпутів
// провести обчислення
// записати результати в таблицю

class CollectData {
  constructor(carValue, carAge, engineCapacity, engineType, formInput) {
    this.carValue = carValue,
    this.carAge = carAge,
    this.engineCapacity = engineCapacity,
    this.engineType = engineType,
    this.formInput = document.querySelectorAll('.js-input')
  }

  getData() {
    for(let i = 0; i < this.formInput.length; i++) {
      this.carValue = document.querySelector('.car-value').value;
      this.carAge = document.querySelector('.car-age').value;
      this.engineCapacity = document.querySelector('.engine-capacity').value;
      this.engineType = document.querySelector('.engine-type').value;
    }
    this.exciseRate = this.engineType == 'gas' ? 50 : 75;
    return this;
  }
}
