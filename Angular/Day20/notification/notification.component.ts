import { Component, OnInit } from '@angular/core';
import { NotifyService } from '../notify.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

    receivedData:string='';
  constructor(private service:NotifyService) { }

  ngOnInit(): void {
    this.GetDataFromNotification();
  }

  GetDataFromNotification(){
        this.service.notification
        .subscribe((res)=>{
            this.receivedData=res;
        })
  }

}
