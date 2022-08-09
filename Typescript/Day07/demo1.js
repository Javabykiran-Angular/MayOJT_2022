//Shallow Copy & deep Copy (JS interview Question)
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// let a=10;
// console.log("Value of a is "+a);
// let b=a;
// console.log("Value of b is "+b);
// b=20;
// console.log('----------------------------')
// console.log("Value of a is "+a);
// console.log("Value of b is "+b);
var arr = [2, 3, 5, 8];
// let c=arr;
// console.log("Original array "+arr);
// console.log("Copied array "+c);
// c[0]=200;
// console.log("-------------------")
// console.log("Original array "+arr);
// console.log("Copied array "+c);
var c = __spreadArray([], arr, true);
console.log("Original array " + arr);
console.log("Copied array " + c);
c[0] = 500;
console.log("===========================");
console.log("Original array " + arr);
console.log("Copied array " + c);
