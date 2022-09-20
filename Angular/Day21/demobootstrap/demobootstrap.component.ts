import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demobootstrap',
  templateUrl: './demobootstrap.component.html',
  styleUrls: ['./demobootstrap.component.css']
})
export class DemobootstrapComponent implements OnInit {

  arrobj:any[]=[
    {
      name:'Motorolla',
      price:25000,
      qty:1
    },
    {
      name:'Sansunf',
      price:22000,
      qty:1
    },
    {
      name:'OnePlus',
      price:35000,
      qty:1
    },
    {
      name:'Realme',
      price:15000,
      qty:1
    }
  ]


  constructor() { }

  ngOnInit(): void {
  }

}
