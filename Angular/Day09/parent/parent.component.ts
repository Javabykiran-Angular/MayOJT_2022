import { Component, OnInit } from '@angular/core';

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

  inputdate:string='';

  constructor() { }

  ngOnInit() {
  }

  onSend(mydate){
      // console.log(mydate.value)
      this.inputdate=mydate.value;
      // console.log("------ "+this.inputdate)
  }

}
