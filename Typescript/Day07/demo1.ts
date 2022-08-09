//Shallow Copy & deep Copy (JS interview Question)

// let a=10;
// console.log("Value of a is "+a);
// let b=a;
// console.log("Value of b is "+b);
// b=20;
// console.log('----------------------------')
// console.log("Value of a is "+a);
// console.log("Value of b is "+b);

let arr=[2,3,5,8];

// let c=arr;
// console.log("Original array "+arr);
// console.log("Copied array "+c);

// c[0]=200;
// console.log("-------------------")
// console.log("Original array "+arr);
// console.log("Copied array "+c);


let c=[...arr];
console.log("Original array "+arr);
console.log("Copied array "+c);
c[0]=500;
console.log("===========================")
console.log("Original array "+arr);
console.log("Copied array "+c);