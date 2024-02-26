function createCar(manufacturer, modelName, ...options) {
    return { manufacturer, modelName, ...Object.fromEntries(options) };
}

let myCar = createCar("Toyota", "Corolla", ["color", "blue"], ["year", 2022]);
console.log(myCar);