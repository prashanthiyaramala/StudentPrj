import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { Router } from '@angular/router';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  student:Student=new Student();
  constructor(private studentservice:StudentService,
    private route:Router) { }
  ngOnInit(): void {}

  saveStudent(){
    this.studentservice.addStudent(this.student).subscribe(data =>{
      console.log(data);
      this.goToStudentList();
  },
  error=> console.log(error));
}
goToStudentList()
  {
    console.log(this.student);
    this.route.navigate(['/students']);
  }
onSubmit()
{
  console.log(this.student);
  this.saveStudent();
}
}


