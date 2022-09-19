import { Injectable } from '@angular/core';
import { Subject ,BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotifyService {

    // notification=new Subject<any>();
    notification=new BehaviorSubject<string>('Welcome');
    
  constructor() { }

    SendMessage(data:string){
      this.notification.next(data);
    }

}
