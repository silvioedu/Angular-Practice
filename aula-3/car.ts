class Car {

    engine:string

    constructor(engine:string) {
        this.engine = engine
    }

    disp():void {
        console.log("Engine is: " + this.engine)
    }
}

var obj = new Car("XXSY1")
console.log("Reading attibute value Engine as: " + obj.engine)
obj.disp()