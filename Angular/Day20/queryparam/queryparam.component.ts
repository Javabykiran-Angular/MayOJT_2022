import { Component, OnInit } from '@angular/core';
import { NotifyService } from '../notify.service';

@Component({
  selector: 'app-queryparam',
  templateUrl: './queryparam.component.html',
  styleUrls: ['./queryparam.component.css']
})
export class QueryparamComponent implements OnInit {

    dataReceived:string='';
  constructor(private notificationService:NotifyService) { }

  ngOnInit(): void {
    this.GetDataFromService();
  }
  GetDataFromService(){
    this.notificationService.notification
    .subscribe((res)=>{
        this.dataReceived=res;
    })
  }

  onSend(inputname:string){
    // console.log(inputname)
    this.notificationService.SendMessage(inputname);
  }

}
