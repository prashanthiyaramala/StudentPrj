import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.css']
})
export class StudentlistComponent implements OnInit {

  students:Student[];

  constructor(private studentservice:StudentService,
    private route:Router) { }

  ngOnInit(): void {
  this.getStudents();
     
  }

  private getStudents()
  {
    this.studentservice.getStudentsList().subscribe(data=>{
      this.students=data;
      });
  }

  updateStudent(id:number)
  {
    this.route.navigate(['update-student',id])
  }
  deleteStudent(id:number)
  {
    this.studentservice.deleteStudentById(id).subscribe(data =>{
      this.getStudents();
    })
  }

  studentDetail(id:number)
  {
    this.route.navigate(['student-details',id]);
  }


}

