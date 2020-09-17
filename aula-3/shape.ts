class Shape {
    
    area:number
    
    constructor(a:number){
        this.area = a
    }
}

class Circle extends Shape {

    disp():void {
        console.log("Area of the circle: " + this.area)
    }
}

var obj = new Circle(223);
obj.disp()