import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../student.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit {

  id:number;
  student:Student=new Student();

  constructor(private studentservice:StudentService,
    private route:Router,
    private actroute:ActivatedRoute) { }

  ngOnInit(): void {
    this.id=this.actroute.snapshot.params['id'];
    this.studentservice.getStudentById(this.id).subscribe(data =>{
    this.student=data;
    },error => console.log(error)
    );
  }

  onSubmit(){
    this.studentservice.updateStudentById(this.id, this.student).subscribe( data =>{
      this.goToStudentList();
    }
    , error => console.log(error));
  }

  goToStudentList()
  {
    this.route.navigate(['/students']);
  }

}
