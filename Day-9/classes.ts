// class Person {
// }

class Car {
    //field 
    engine: string;

    //constructor 
    constructor(engine: string) {
        this.engine = engine
    }

    //function 
    disp(): void {
        console.log("Engine is  :   " + this.engine)
    }
}

//create an object 
var obj1 = new Car("XXSY1")

//access the field 
console.log("Reading attribute value Engine as :  " + obj.engine)

//access the function
obj1.disp()