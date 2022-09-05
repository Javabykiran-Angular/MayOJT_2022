import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name:'summary',
   pure :true
  // pure :false
})
export class SummaryPipe implements PipeTransform
{
 
  transform(value: any,start:number=0,end:number=15) {

    console.log("U r in transform() method")
      
    //  return (temp.substring(0,15)+"...");
    return (this.getSummary(value,start,end));
  }

  getSummary(myvalue:string,s:number,e:number):string{
    let temp=(<string> myvalue );
      return (temp.substring(s,e)+"...")
  }



}