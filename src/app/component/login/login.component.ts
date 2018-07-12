import { Component, OnInit } from '@angular/core';
import { UserdataService } from '../../service/userdata.service';
import { LogInAuthenticiate } from '../../service/guard.service'
import { authService } from '../../service/auth.service'
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from "@angular/router";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  lForm: FormGroup;
  msg: string = "";
  msg1: string = "";
  
  constructor(private userdataService: UserdataService, private fb: FormBuilder, private router: Router,private logInAuthenticiate: LogInAuthenticiate,private AuthService : authService  ) {
    this.lForm = this.fb.group({
      'username': [null, [Validators.required,Validators.pattern(new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/))]],
      'password': [null, Validators.required],
    });
  }
 ngOnInit() {}
  get username() { return this.lForm.get('username'); }
  get password() { return this.lForm.get('password'); }
  login(): void {
   this.logInAuthenticiate.loginData(this.lForm.value).subscribe((res) => {
      if (res['error'] == true) {
        this.msg = res['data'].message;
      }
      else {
         this.AuthService.saveItemIntoLocalStorage(   { token: res['data'].token , name : "name" } );
         this.router.navigate(['/dashboard']);
      }
    })
  }
  socialLogin(app)
  { 
    this.openAuthPopup(
      '/assets/socialmedia.html?socialApp=' + app, () => {
       window['socaialmedia_login'] = this;
      }
    );
  }
   openAuthPopup(url, callback) {
    const y_axis = window.outerHeight / 2 + window.screenY - ( 600 / 2);
    const x_axis = window.outerWidth / 2 + window.screenX - ( 800 / 2);
    window.open(url, '_blank', 'location=0,status=0,width=600,height=600,top=' + y_axis + ',left=' + x_axis);
    callback();
  }
  fbAuthenticationCallback(success: boolean, data: any){
  if (success)
 { 
   this.AuthService.saveItemIntoLocalStorage( { token:  data['data'].token  , name :  data['data'].name } );
    this.router.navigate(['/dashboard']);
    }
  else {
    this.msg1 = "Please enter right Email and Password ";
  }
  }
  change()
  {
    document.getElementById("home").hidden = false;
    document.getElementById("home").style.display='block';
    document.getElementById("profile").hidden = true;
}
 change1()
  {
    document.getElementById("profile").hidden = false;
     document.getElementById("home").hidden = true;
  }
change2()
  {
    document.getElementById("profile").hidden = true;
     document.getElementById("home").hidden = false;
}
}
