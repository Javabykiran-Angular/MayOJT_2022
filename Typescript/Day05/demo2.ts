
//optional parameter function

  function add1(a:number,b?:number){
    console.log("Value of a is "+a);//8
    console.log("Value of b is "+b); // undefined
    console.log("Addition of a+b is "+(a+b)); //NAN=> Not a number
  }

  // add1(8);
  // add1(8,10);

  function add2(a?:number,b?:number){
    console.log("Value of a is "+a);//8
    console.log("Value of b is "+b); // undefined
    console.log("Addition of a+b is "+(a+b)); //NAN=> Not a number
  }

   // add2();
  //  add2(12,20);


  //default parameter function

    function add3(a:number,b:number=9){

      console.log("Value of a is "+a);//4
    console.log("Value of b is "+b); // 9
    console.log("Addition of a+b is "+(a+b)); //13

    }

    // add3(4);

    function add4(a:number=8,b:number){

      console.log("Value of a is "+a);//4
    console.log("Value of b is "+b); // 9
    console.log("Addition of a+b is "+(a+b)); //13

    }

    // add4(10,45)

    function add5(a:number=8,b?:number){

      console.log("Value of a is "+a);//8
    console.log("Value of b is "+b); // undefined
    console.log("Addition of a+b is "+(a+b)); //nan

    }

    // add5();


      let temp1=(a:number,b:number=2)=>{
        console.log("Value of a is "+a);//8
        console.log("Value of b is "+b); // undefined
        console.log("Addition of a+b is "+(a+b)); //nan
    
      }

        // temp1(5)
        temp1(5,4);
