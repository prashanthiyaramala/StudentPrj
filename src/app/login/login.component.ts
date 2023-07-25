import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormControl,FormGroup,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import ValidateForm from 'src/helpers/validateForm';
import { UserserviceService } from '../userservice.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  getData: boolean;
  model: any = {};


  constructor(
    private router: Router, private userservice: UserserviceService

  ) {}

  ngOnInit() : void{
  }

 onSubmit() {


    var user = this.model.username;
    var password = this.model.password;


    this.userservice.getUserData(user, password)
      .subscribe((res: boolean) => {
        this.getData = res;


        if (this.getData == true) {

         this.router.navigate(['/students'])
        } else {
         alert("Invalid users")
        }
      });
}
}


