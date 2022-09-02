import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inbuild-pipe',
  templateUrl: './inbuild-pipe.component.html',
  styleUrls: ['./inbuild-pipe.component.css']
})
export class InbuildPipeComponent implements OnInit {


    strname:string='U are learning Angular From sumit raokhande trainer';
    num2:number=-452.78956324557;

    mydate=new Date();
    myhint:string='enter the name';

  constructor() { }

  ngOnInit() {
  }

}
