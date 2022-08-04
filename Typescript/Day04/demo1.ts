//literal
var a:number|string;
// a=2.5;
// console.log("Value of a is "+a);
// a='Sumit';
// console.log("Value of a is "+a);

var b:50|boolean;
b=50;
// console.log("Value of b is "+b);
// b=true;
// console.log("Value of b is "+b);
// b=false;
// console.log("Value of b is "+b);

//enum 
enum mySize{s=32,l=40,xl=42,xxl=44};
// console.log("Enum value is "+mySize.xxl);
enum mySize1{s1=2,s2,s3,s4}
// console.log("Mysize1 "+mySize1.s4);

//Generaic Type
type temp=number|string;
var c:temp;
c=2.5;
// console.log(`C value is ${c} `)
c='Sumit'
// console.log(`C value is ${c} `)


//operators

// arithmatic => +,-,/,*,%
// relational => <,>,<=,>=, !=, ==(it checks only value of variable), ===(Strongly equality=> it checks both value as well as data type of variable)
// logical => &&,||,!
// bitwise => &,|,~,^,!,>>,<<
// unary => ++a,a++,--a,a-- , inc/dec pos/pre
// assignment => =,+=,-=,/=,*=
// ternary => condition?expression1:expression2

// Control statement
// if,if-else,nested if-else,switch,break,continue
var count=41;
// if(count<6){
//   console.log("Condition is true")
// }else{
//   console.log("Condition is false")
// }

var choice=21;

// switch(choice){
//   case 1:console.log("U r in case 1");
//           break;
//   case 2 :console.log("U r in case 2");
//           break;
//   default:console.log("U r in default case ");
//           break;
// }

//Loop Statement
  //while,do-while,for,foreach

  //while loop
    var count1=5;
    // while(count1!=0){
    //     console.log("Count1 is "+count1)
    //     count1--;
    // }

// do{
//   console.log("Count1 is=== "+count1)
//   count1--;
// }while(count1!=0)


for(var i=0;i<4;i++){
  // console.log("Value of i is "+i);
}

// console.log("Value of i After loop "+i);

//var => it has global scope 

for(let j=0;j<4;j++){
  console.log("Value of j is "+j);
}

// console.log("Value of j After loop "+j);

// let has scope within nearest block{}

// const => u can make variable value as constant
// const => it has global scope as well as local scope 
const pi=3.14;
