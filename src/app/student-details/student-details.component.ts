import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {

  id:number;
  stud!:Student;
  constructor(private studentservice:StudentService,
    private route:Router,
    private actroute:ActivatedRoute) { }

  ngOnInit(): void {
    this.id=this.actroute.snapshot.params['id'];

    this.stud= new Student();
    this.studentservice.getStudentById(this.id).subscribe(data =>{
      this.stud = data;
    });
  }

  goToStudentList()
  {
    console.log(this.stud);
    this.route.navigate(['/students']);
  }
}



