let global_Num = 12          //global variable 
class Numbers {
    Num_val = 13;             //class variable 
    static sval = 10;         //static field 

    storeNum(): void {
        let local_Num = 14;    //local variable 
        console.log(local_Num)
    }
}
console.log("Global Num: " + global_Num)
console.log(Numbers.sval)   //static variable  
let  obj = new Numbers();
console.log("Class Variable: " + obj.Num_val);
obj.storeNum();