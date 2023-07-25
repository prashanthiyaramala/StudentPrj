import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from './student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private  baseURL="http://localhost:8080/api/v1/students";
  constructor(private http:HttpClient) { }

  getStudentsList():Observable<Student[]>{
    return this.http.get<Student[]>(`${this.baseURL}`);
  }

  addStudent(student:Student):Observable<Object>{
    return this.http.post(`${this.baseURL}`,student);
  }

  getStudentById(id:number):Observable<Student>{
    return this.http.get<Student>(`${this.baseURL}/${id}`);
  }

  updateStudentById(id:number,student:Student):Observable<Object>{
    return this.http.put(`${this.baseURL}/${id}`,student);
  }

  deleteStudentById(id:number):Observable<Object>{
    return this.http.delete(`${this.baseURL}/${id}`);
  }

}

