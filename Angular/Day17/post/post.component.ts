import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  posts:any[]=[];
  id:string='';
  title:string='';
  body:string='';
  isHidden:boolean=true;

  constructor(private service:HttpService) { }

  ngOnInit() {
      this.GetPost();
  }

  GetPost(){
    this.service.getPost()
    .subscribe((response)=>{
      // console.log(response);

      this.posts=(<any>response)

    },(myerror)=>{
      //alert("Error Occur!!");

       if(myerror.status >=400 && myerror.status<=499) {
        alert("Client side error"+myerror.status)
       }else if(myerror.status>=500 && myerror.status<=599){

        //....
       }else{
        alert("Error Occured "+myerror.status);
       }

    })
  }

  onSend(mytitle:string,mybody:string){

      let obj={
        title:mytitle,
        body:mybody
      }

      this.service.Postdata(obj)
      .subscribe((response)=>{
          console.log(response)
      })

  }


  onEdit(item:any){
    this.id=item.id;
    this.title=item.title;
    this.body=item.body;
    this.isHidden=false;
  }
  onUpdate(){

      let obj={
        id:this.id,
        title:this.title,
        body:this.body
      }

      this.service.UpdateData(obj)
      .subscribe((response)=>{
        console.log(response)
      })

  }

  onDelete(id:any){
    this.service.Deletedata(id)
    .subscribe((response)=>{
      console.log(response);
    })
  }

}
