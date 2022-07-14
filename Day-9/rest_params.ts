function addNumbers(...nums: number[]) {             // rest operator
   var i;
   var sum: number = 0;
   console.log([...nums]);                          //spared operator
   for (i = 0; i < nums.length; i++) {
      sum = sum + nums[i];
   }
   console.log("sum of the numbers", sum)
}
addNumbers(1, 2, 3)
addNumbers(10, 20, 30, 40, 50)

// let foo = (x: number) => 10 + x
// console.log(foo(100));


let foo = (x: number) => { return 10 + x }
console.log(foo(100));


// const foo = function (x: number) {
//    return 10 + x;

// }
// console.log(foo(100));