import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding1',
  templateUrl: './event-binding1.component.html',
  styleUrls: ['./event-binding1.component.css']
})
export class EventBinding1Component implements OnInit {

  count:number=0;

  constructor() { }

  ngOnInit() {
  }

  onClick(){

    if(this.count==0){
      console.log("Click Event Occur....")
      this.count++;
    }
    
  }

  onImage(){
    console.log("on Image Click!!!")
  }

  onDollerEvent(myevent){
    console.log(myevent);
    console.log(myevent.target.value)
  }

  onSend(myname){
    console.log(myname);
    console.log(myname.value)
    myname.style.background='green';
    myname.style.color='white';
  }

  onSend1(mynameData){
      console.log(mynameData)
  }

}
