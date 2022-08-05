//Anonymous Function
// function does not have any name
var temp1 = function () {
    console.log("Anonymous Function is called");
};
// temp1();
var temp2 = function (a, b) {
    return (a + b);
};
// console.log(`Anonymous Function of 4th type is called ${temp2(2,3)} `)
//Fat arrow function/arrow function
var temp3 = function () {
    console.log("Fat arrow function is called ");
};
// temp3();
var temp4 = function (a, b) {
    return (a + b);
};
console.log("Addition is ".concat(temp4(7, 8)));
