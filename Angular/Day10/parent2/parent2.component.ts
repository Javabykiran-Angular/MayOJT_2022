import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-parent2',
  templateUrl: './parent2.component.html',
  styleUrls: ['./parent2.component.css']
})
export class Parent2Component implements OnInit,AfterViewInit {

    @ViewChild('mydiv',{static:false}) Mydiv:ElementRef;
  constructor() { }


  ngOnInit() {
    console.log(this.Mydiv);
  }

  ngAfterViewInit(): void {
   console.log("U r in ngAfterViewInit ");
   console.log(this.Mydiv);
   this.Mydiv.nativeElement.style.background='blue';
   this.Mydiv.nativeElement.classList="box";

  }

}
