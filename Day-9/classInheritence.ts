class Shape1 {
    Area: number

    constructor(a: number) {
        this.Area = a
    }
}

class Circle1 extends Shape {
    disp(): void {
        console.log("Area of the circle:  " + this.Area)
    }
}

let objt = new Circle1(250);
objt.disp();