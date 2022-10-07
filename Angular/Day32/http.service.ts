import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {environment} from '../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  baseUrl:string=environment.baseurl;

  constructor(private http:HttpClient) { }


  login(obj:any){
       return (this.http.post(`${this.baseUrl}login`,obj));
  }

  GetAllEmp(){
    return  (this.http.get(`${this.baseUrl}getallemployee`))
  }

  GetParticularRecordById(id:any){
    return (this.http.get(`${this.baseUrl}getemployeebyid/${id}`));
  }

  getAllCountry(){
    return (this.http.get(`${this.baseUrl}getallcountry`))
  }

  AddEmployee(obj:any){
    return (this.http.post(`${this.baseUrl}addemployee`,obj,{responseType:'text'}));
  }

  UpdateRecord(obj:any){
     return  (this.http.put(`${this.baseUrl}updateemployee`,obj,{responseType:'text'}));
  }

  DeleteRecord(id:any){
    return (this.http.delete(`${this.baseUrl}deleteemployee/${id}`,{
      responseType:'text'
    }));
  }


}
