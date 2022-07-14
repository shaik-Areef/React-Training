var global_Num = 12; //global variable 
var Numbers = /** @class */ (function () {
    function Numbers() {
        this.Num_val = 13; //class variable 
    }
    Numbers.prototype.storeNum = function () {
        var local_Num = 14; //local variable 
        console.log(local_Num);
    };
    Numbers.sval = 10; //static field 
    return Numbers;
}());
console.log("Global Num: " + global_Num);
console.log(Numbers.sval); //static variable  
var obj = new Numbers();
console.log("Class Variable: " + obj.Num_val);
obj.storeNum();
