describe("Calculation", function () {

  it("creates new calculation object", function () {
    var calcObj = new Calculation({});
    expect(calcObj.paramsObj).toEqual({});
  });

  it("uses given params", function () {
    let params = {
      carValue: 3000,
      carAge: 10,
      engineCapacity: 1992,
      exciseRate: 50
    }
    var calcObj = new Calculation(params);
    expect(calcObj.paramsObj).toEqual(params);
  });

  it("return totals", function () {
    let params = {
      carValue: 3000,
      carAge: 10,
      engineCapacity: 1992,
      exciseRate: 50
    }
    let calcObj = new Calculation(params);
    calcObj.call();
    console.log(calcObj.totals);
    expect(calcObj.totals).toEqual(
      {
        exice: 996,
        fee: 300,
        incomeTaxBasis: 4296,
        tax: 859.2,
        totalCost: 2155.2,
        value: null
      });
  });

  it("it counts for diesel", function () {
    let params = {
      carValue: 3000,
      carAge: 10,
      engineCapacity: 1992,
      exciseRate: 75
    }
    var calcObj = new Calculation(params);
    calcObj.call();
    expect(calcObj.totals.totalCost).toEqual(2752.8);
  });

});
