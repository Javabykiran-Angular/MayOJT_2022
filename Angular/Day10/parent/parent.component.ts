import { Component, ElementRef, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {


  strData:string='Data send from Parent';

  jsonObj={
    name:'Sumit',
    status:true,
    id:9
  }

  inputdate:string;

  ChildStrData:string='';
  childarrData:any[]=[];

  constructor() { }

  ngOnInit() {
  }

  onSend(mydate){
      // console.log(mydate.value)
      this.inputdate=mydate;
      console.log("------ "+this.inputdate)

  }

  onDataReceived(myevent){
      this.childarrData=myevent;
  }

}
