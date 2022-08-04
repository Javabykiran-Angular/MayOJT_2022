//Functions
//1 functions without parameter & without return type
//2 functions with parameter & without return type
//3 functions without parameter & with return type
//4 functions with parameter & with return type
//1 functions without parameter & without return type
function add1() {
    console.log("U r in first type of Function");
}
// add1();
//2 functions with parameter & without return type
function add2(a, b) {
    console.log("Addition is ".concat(a + b, " "));
}
// add2(2,3);
//3 functions without parameter & with return type
function add3() {
    return (5 + 5);
}
var temp = add3();
// console.log(`Result is ${temp}`)
//4 functions with parameter & with return type
function add4(a, b) {
    return (a + b);
}
console.log("Addition is ".concat(add4(4, 6)));
