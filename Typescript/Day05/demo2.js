//optional parameter function
function add1(a, b) {
    console.log("Value of a is " + a); //8
    console.log("Value of b is " + b); // undefined
    console.log("Addition of a+b is " + (a + b)); //NAN=> Not a number
}
// add1(8);
// add1(8,10);
function add2(a, b) {
    console.log("Value of a is " + a); //8
    console.log("Value of b is " + b); // undefined
    console.log("Addition of a+b is " + (a + b)); //NAN=> Not a number
}
// add2();
//  add2(12,20);
//default parameter function
function add3(a, b) {
    if (b === void 0) { b = 9; }
    console.log("Value of a is " + a); //4
    console.log("Value of b is " + b); // 9
    console.log("Addition of a+b is " + (a + b)); //13
}
// add3(4);
function add4(a, b) {
    if (a === void 0) { a = 8; }
    console.log("Value of a is " + a); //4
    console.log("Value of b is " + b); // 9
    console.log("Addition of a+b is " + (a + b)); //13
}
// add4(10,45)
function add5(a, b) {
    if (a === void 0) { a = 8; }
    console.log("Value of a is " + a); //8
    console.log("Value of b is " + b); // undefined
    console.log("Addition of a+b is " + (a + b)); //nan
}
// add5();
var temp1 = function (a, b) {
    if (b === void 0) { b = 2; }
    console.log("Value of a is " + a); //8
    console.log("Value of b is " + b); // undefined
    console.log("Addition of a+b is " + (a + b)); //nan
};
// temp1(5)
temp1(5, 4);
