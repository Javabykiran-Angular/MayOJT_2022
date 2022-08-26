import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {

    @Output() ChildStrEvent =new EventEmitter();

    @Output() ChildArrObjEvent=new EventEmitter();

    arrproduct=[
      {
        name:"Motorola",
        price:30000,
        quantity:1
      },
      {
        name:"Samsung",
        price:25000,
        quantity:1
      },
      {
        name:"RealMe",
        price:20000,
        quantity:2
      },
      {
        name:"OnPelus",
        price:40000,
        quantity:1
      },
      {
        name:"iPhone",
        price:100000,
        quantity:1
      }
    ]
   

  constructor() { }

  ngOnInit() {
  }

  onSend(inputname){
     this.ChildStrEvent.emit(inputname) ;

     this.ChildArrObjEvent.emit(this.arrproduct);
  }

}
