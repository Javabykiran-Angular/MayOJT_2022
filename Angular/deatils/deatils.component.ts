import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../http.service';
import { Employee } from '../model/employee';

@Component({
  selector: 'app-deatils',
  templateUrl: './deatils.component.html',
  styleUrls: ['./deatils.component.css']
})
export class DeatilsComponent implements OnInit {

  empobj=<Employee>{};
  constructor(private route:ActivatedRoute,
              private service:HttpService) { }

  ngOnInit(): void {
    this.getDataFromUrl();
  }

  getDataFromUrl(){
    this.route.paramMap
    .subscribe((param)=>{
      // console.log(param.get("id"))
      this.service.GetParticularRecordById(param.get("id"))
      .subscribe((response)=>{
        // console.log(response);
        this.empobj=(<Employee>response);
      })
    })
  }

  OnUpdate(){

  }

}
