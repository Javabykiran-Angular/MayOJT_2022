//Anonymous Function
// function does not have any name

  let temp1=function (){
    console.log("Anonymous Function is called");
  }

  // temp1();

  let temp2=function (a:number,b:number):number
  {

      return (a+b);
  }

    // console.log(`Anonymous Function of 4th type is called ${temp2(2,3)} `)

    //Fat arrow function/arrow function

      let temp3=()=>{
        console.log("Fat arrow function is called ");
      }

      // temp3();

      let temp4= (a:number,b:number):number=>{
          return (a+b);
        }

        // console.log(`Addition is ${temp4(7,8)}`);



        
