import { Component, OnInit } from '@angular/core';
import { UserdataService } from '../../../service/userdata.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from "@angular/router";
import { authService } from '../../../service/auth.service'



@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  rForm: FormGroup;
  msg: string = "";
  
  constructor(private userdataService: UserdataService, private fb: FormBuilder,private router : Router , private AuthService : authService ) {
    this.rForm = this.fb.group({
      'email': [null, [Validators.required, Validators.pattern(new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/))]],
      'password': [null, [Validators.required, , Validators.pattern(new RegExp(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/))]],
      'confirmpassword' : ["", Validators.required ],
      'tc': [false]
    });
  }
  get email() { return this.rForm.get('email'); }
  get password() { return this.rForm.get('password'); }
  get tc() { return this.rForm.get("tc"); }
  get confirmpassword() { return this.rForm.get("confirmpassword"); }
  
  ngOnInit() {
  }
  
  registration(): void {
  
    if (this.rForm.valid) {
       
      if( this.rForm.value.confirmpassword != this.rForm.value.password )
      { 
        this.msg = "Password and Confirm Password do not match"
          return ;  
      }
      else
      {
      if (this.rForm.value.tc == false) {
        this.msg = "Please Select terms and Conditions"
        return ;
      }
      else {
        this.userdataService.registrationData(this.rForm.value).subscribe((res) => {
        if (res['error'] == true) {
        this.msg = "User with same email already exits"
      }
      else {
        this.msg = ""
          alert("Please verify Your Email");
         this.rForm.setValue({
        email: null, 
        password:null, 
        confirmpassword :null, 
        tc : false

});
          }   
        }
        )
      }
    }
  }
  
}
}