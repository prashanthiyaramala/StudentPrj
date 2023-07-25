import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor(private http:HttpClient) { }


  getUserData(username: string,password: string){
    return this.http.get('http://localhost:8080/user/'+username+'/'+password);
  }
}
