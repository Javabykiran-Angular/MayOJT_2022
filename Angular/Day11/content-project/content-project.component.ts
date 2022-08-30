import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-project',
  templateUrl: './content-project.component.html',
  styleUrls: ['./content-project.component.css']
})
export class ContentProjectComponent implements OnInit {

  // data:string='Email <input type="text" placeholder="Enter the Email id">'

  data:string='<h2>Enter the Email</h2>'

  labelname:string="Email Id::";

  hintmMsg:string="Email ID required";

 arrUsername=["Sumit",'Kiran','Spruha','Bhagyeshwar','Vidya','Amol'];

  constructor() { }

  ngOnInit() {
  }

  onChange(inputemail){
      inputemail.style.background='green';
      inputemail.style.color='white';
      console.log("Data is "+inputemail.value);
      // if(inputemail.value=="abc@gmail.com"){
      //   this.hintmMsg="Valid Email Address";
      // }else{
      //   this.hintmMsg="Enter the appropriate Email Id";
      // }
  }

}
