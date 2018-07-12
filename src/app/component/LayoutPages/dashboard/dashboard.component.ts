import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserdataService } from '../../../service/userdata.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
 facebook: string ="";
github: string ="";
linkdin: string ="";
stackoverflow: string ="";
userName: string ="";
dob: string ="";
current_address: string ="";
permanent_address: string ="";
gender: string ="";
pincode: string ="";
office_phone: Number = 0 ;
  mobile_phone: Number= 0 ;
  home_phone: Number= 0 ;
   marital_status: String ="";
   passport_number: String ="";
  country: String="";
  state: String="";
  city: String="";
   edu : any;
  constructor( private  userdataService : UserdataService , private router : Router) {
 var userName1 =   JSON.parse(localStorage.getItem("currentUser"));
   this.userName = userName1.name;
   }

  ngOnInit() {
     this.fetchInformation();
  }
   fetchInformation() {
    this.userdataService.fetchData().subscribe((res) => {
     if (res['error'] == true) {
          }
      else{ 
        if(res['data'].userinformation.length > 0 )
        {
        if( res['data'].userinformation[0].user_details.length > 0 )
        {
        let obj = res['data'].userinformation[0].user_details[0] ;
       // this.edu = res['data'].user_educations;
        this.facebook = obj.facebook;
        this.github = obj.github;
       this.stackoverflow =obj.stackoverflow;
       this.linkdin = obj.linkedin;
        this.dob = obj.dob;
      this.pincode = obj.pincode;
this.office_phone = obj.office_phone;
this.mobile_phone = obj.mobile_phone;
this.home_phone = obj.home_phone;
this.marital_status = obj.marital_status;
this.passport_number = obj.passport_number;
this.country = obj.country;
this.state = obj.state;
this.city = obj.city;
if(obj.gender == 1)
this.gender = "Male";
else{
  if(obj.gender == 2)
  this.gender = "Female";
  else{
     if(obj.gender == 3)
  this.gender = "Others";
  else
  this.gender = "NotDefine";
  }
}
    }
        }
      }
    });

  }

}
