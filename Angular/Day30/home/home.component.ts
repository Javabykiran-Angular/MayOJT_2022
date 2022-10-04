import { Component, OnInit, TemplateRef } from '@angular/core';
import { HttpService } from '../http.service';
import { BsModalService,BsModalRef } from 'ngx-bootstrap/modal';
import { Employee } from '../model/employee';
import { DialogService } from '../dialog.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    EmpData:any[]=[];
    empobj=<Employee>{};
    isradioCheck:boolean=false;
    modalRef!: BsModalRef;  

    config = {
      animated: true,
      
      ignoreBackdropClick: true,
      class: "alert alert-danger"
    };

  constructor(private service:HttpService,
    private modalservice:BsModalService,
    private dialogservice:DialogService) { }

  ngOnInit(): void {
    this.getAllEmpData();
          
  }

  getAllEmpData(){
      this.service.GetAllEmp()
      .subscribe((response:any)=>{
          // console.log(response)
          this.EmpData=response;
          
      })
  }

  isRadioCheck(){
      if(this.isradioCheck)
      return true;
      else
      return false;
  }

  onRadioCheck(item:any){
      this.empobj=item;
    this.isradioCheck=true;
  }

  onUpdate(popup: TemplateRef<any>){
    if(this.isRadioCheck()){
      //perform PL logic
      this.modalRef = this.modalservice.show(        
        popup, this.config);

    }else{
      alert("Select Record to update!!!")
    }
  }

  onDelete(){
    if(this.isRadioCheck()){
      //perform ur logic
        this.dialogservice.OpenConfirmDialog('Are you sure to delete this record?')
        .afterClosed()
        .subscribe((res)=>{
          if(res){
            //delete a record
            this.service.DeleteRecord(this.empobj.id)
            .subscribe((response:string)=>{
              console.log(response);
              this.getAllEmpData()
            })
          }else{
            alert("Record is not deleted...")
          }
        })

    }else{
      alert("Select Record to Delete!!!")
    }
  }



}
