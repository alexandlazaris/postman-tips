// status code check
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

// reads value from env variable
pm.test("country name is Greece", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData[0].name.common).to.eql(pm.environment.get("countryName"));
});

// reads value from env variable
pm.test("capital city contains Athens", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData[0].capital).to.contain(pm.environment.get("capital"));
});

// custom value for specific test
pm.test("population is greater then 10 million", function () {
    let minPopulation = 10000000;
    var jsonData = pm.response.json();
    pm.expect(jsonData[0].population).to.be.greaterThan(minPopulation);
});
