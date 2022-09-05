import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-pipe',
  templateUrl: './custom-pipe.component.html',
  styleUrls: ['./custom-pipe.component.css']
})
export class CustomPipeComponent implements OnInit {

  strDetails:string='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam ipsam odit tempora repellat et dolorum. Excepturi vero labore voluptatum perferendis consequuntur iure tenetur quia, dolorem, doloremque temporibus assumenda eveniet quasi.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam ipsam odit tempora repellat et dolorum. Excepturi vero labore voluptatum perferendis consequuntur iure tenetur quia, dolorem, doloremque temporibus assumenda eveniet quasi.';
  constructor() { }

  ngOnInit() {
  }

}
