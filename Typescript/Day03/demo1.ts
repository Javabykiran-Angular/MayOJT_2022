// console.log("Hello World");
// console.log('Welcome to Angular Module');

// var a1;
// var a2,a3,a$4,a_5;

// data types 
// number(int,long,double,float,short,signed/unsigned),string(''/""),boolean(true/false)
//any (number,string,boolean)
//void => it is neutral data type => it does not point anything
//msec.null & undefine => it works as data type as well as value 

var a:number=10;   //forward declaration & defination

  // console.log("Value of a is "+a);

  // console.log(`Value of a is ${a}`)

  var a1=20;

  var a2:number;
  a2=30;
  var str:string='Sumit Raokhande';

  // console.log('Value of str is '+str)

  var a3:any;
  a3=2.5;
  // console.log("Value of a3 is "+a3)
  // a3='Angular 8';
  // console.log("Value of a3 is "+a3)
  // a3=true;
  // console.log("Value of a3 is "+a3)


  var b1;
  // console.log("Value of b1 is "+b1)
  // var b2:number;
  // console.log("Value of b2 is "+b2);


  //Type assertion

  //variable data type either any or object

  // u can use type assertion in 2 ways 
  // 1 angle bracket syntax
  // 2 as syntax

   // 1 angle bracket syntax

    var str1:any;
    var temp=(<string> str1)
    // temp.

 // 2 as syntax

    var temp2=(str1 as string)
    // temp2.