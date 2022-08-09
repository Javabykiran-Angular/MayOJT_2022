//Swapping variables without using 3rd variables (Js interview Question)
// way of swapping
//1  using 3rd variable
//2  using Addition & subsctraction
//3  using xor operation
//4 using array de-reference
var _a;
var a = 10;
var b = 20;
console.log("Before swapping of variable\n    a= ".concat(a, "\n    b= ").concat(b, "\n"));
_a = [a, b], b = _a[0], a = _a[1];
console.log("After swapping of variable\n    a= ".concat(a, "\n    b= ").concat(b, "\n"));
