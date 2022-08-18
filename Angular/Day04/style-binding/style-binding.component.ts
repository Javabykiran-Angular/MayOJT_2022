import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style-binding',
  templateUrl: './style-binding.component.html',
  styleUrls: ['./style-binding.component.css']
})
export class StyleBindingComponent implements OnInit {

  mycolor:string='green';
  rating:number=2;

  jsonObj={
    color:'blue',
    fontStyle:'italic',
    'font-family':'Courier New',
    'font-size':'32px'
  }

  constructor() { }

  ngOnInit() {
  }

}
