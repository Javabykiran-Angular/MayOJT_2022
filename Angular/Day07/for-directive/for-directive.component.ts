import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-for-directive',
  templateUrl: './for-directive.component.html',
  styleUrls: ['./for-directive.component.css']
})
export class ForDirectiveComponent implements OnInit {

    course:string[]=['Core Java','Advanced java','Spring Boot','JSP','Angular 8'];

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
    selected:string='';

  constructor() { }

  ngOnInit() {
  }

  onMouseOver(myitem){
    console.log("Mouse Over Event Occur!!")
    this.selected=myitem.name;
  }

  onMouseOut(){

    console.log(`---------------------------
      Mouse Out Event Occur....
    `);
    this.selected='';

  }

}
