var Car = (function () {
    function Car(engine) {
        this.engine = engine;
    }
    Car.prototype.disp = function () {
        console.log("Engine is: " + this.engine);
    };
    return Car;
})();
var obj = new Car("XXSY1");
console.log("Reading attibute value Engine as: " + obj.engine);
obj.disp();
