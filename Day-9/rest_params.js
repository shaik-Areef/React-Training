var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function addNumbers() {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    var i;
    var sum = 0;
    console.log(__spreadArray([], nums, true)); //spared operator
    for (i = 0; i < nums.length; i++) {
        sum = sum + nums[i];
    }
    console.log("sum of the numbers", sum);
}
addNumbers(1, 2, 3);
addNumbers(10, 20, 30, 40, 50);
// let foo = (x: number) => 10 + x
// console.log(foo(100));
var foo = function (x) { return 10 + x; };
console.log(foo(100));
// const foo = function (x: number) {
//    return 10 + x;
// }
// console.log(foo(100));
