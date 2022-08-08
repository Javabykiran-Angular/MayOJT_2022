//foreach
// let a=[44,55,6,7,8];
// a.forEach((myvalue,i)=>{
//   console.log(` Array value is a[${i}]=${myvalue} `)
// })
//Rest Parameter function
function display(a) {
    var item = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        item[_i - 1] = arguments[_i];
    }
    console.log(a);
    console.log("Value is " + item.join(" "));
}
// display(4,5,9,88);
// display("Sumit",4,5,9,88,4,23,45,77,100);
//1 Push & pop
//It is work on LIFO Principal
// Last In first Out
// data is added at the last & we can pop a data from last 
var a = [];
// a.push(45);
// console.log(a);
// a.push(56,77);
// console.log(a);
// let temp=a.pop();
// console.log(a);
// console.log("Poped value is "+temp);
//2 Using splice method
// a.splice(0,0,78);
// console.log(a);
// a.splice(1,0,90,45,100);
// console.log(a);
// a.splice(2,0,22);
// console.log(a);
// a.splice(3,1);
// console.log(a);
// a.splice(2,2);
// console.log(a);
// a.splice(0,1,88);
// console.log(a);
// a.splice(1,1,15,74,89,63);
// console.log(a);
//slice
//it is used a copy section of data 
var b = ['Angular 8', "React js", 'Vue js', 'Embber js', "JSP", 'Core java', 'Spring Boot'];
// console.log(b);
var temp = b.slice(1, 4);
// console.log(`
// Copies Array => ${temp}  
// `)
var temp2 = b.slice(1);
// console.log(`
// Copies Array => ${temp2}  
// `)
var temp3 = b.slice();
// console.log(`
// Copies Array => ${temp3}  
// `)
//Map Method
var c = [2, 3, 4, 5, 6];
var res = c.map(function (value) {
    return (value * value);
});
console.log("Original array " + c);
console.log("Square array " + res);
