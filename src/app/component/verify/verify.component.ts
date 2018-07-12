import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { UserdataService } from '../../service/userdata.service';
//import { Router } from "@angular/router";
import { authService } from '../../service/auth.service'
@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.css']
})
export class VerifyComponent implements OnInit {
 token: string = "";
 msg : string ="";
  constructor(private activatedRoute: ActivatedRoute , private  userdataService : UserdataService ,private router : Router , private AuthService : authService ) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params: Params) => {
         this.token = params['token'];
         this.verification();
      });

  }
  verification() {
     let obj = {
      token : this.token
    }
  this.userdataService.verificationData(  obj ).subscribe((res) => {
        console.log(res);
        if (res['error'] == true) {
              this.msg = "Registration Failed";
            }
      else {
           this.AuthService.saveItemIntoLocalStorage( { token:  res['data'].token , name : ""} );
           this.router.navigate(['/dashboard']);
      }   
    } );
}
}
