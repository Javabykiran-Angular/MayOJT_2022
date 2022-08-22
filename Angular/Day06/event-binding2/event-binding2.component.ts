import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding2',
  templateUrl: './event-binding2.component.html',
  styleUrls: ['./event-binding2.component.css']
})
export class EventBinding2Component implements OnInit {

    result:number=0;
    output:number=0;
    name:string='';
    myselect:string='';

  constructor() { }

  ngOnInit() {
  }

  onAddition(num1,num2){

    let n1=+num1;
    let n2=+num2;
    this.result=n1+n2;

  }

  onChange(){

    console.log("Change Event Occur!!!")

  }

  onChange1(myinput){
    console.log(myinput.value);
    myinput.style.background='blue';
    myinput.style.color='white';
  }
  onKeyup(){
    console.log("Key Up event Occur!!")
  }

  onKeydown(){
    console.log("Key down event Occur!!")
  }

  onSelectChange(){
    console.log("ur Selection is "+this.myselect)
  }

}
