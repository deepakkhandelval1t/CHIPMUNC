import { Component } from '@angular/core';
import { ProfilehomeService } from '../../../../service/profilehome.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidationService } from '../../../../service/validation.service';



@Component({
    selector: 'app-profilehome',
    templateUrl: './profilehome.component.html',
    providers: [ProfilehomeService, ValidationService]
   
})
export class ProfilehomeComponent {
    form : FormGroup;

  
  constructor(private formBuilder : FormBuilder, private ProfileService: ProfilehomeService,
            private ValidationService:ValidationService) { 
    this.onProfile();
      this.form = this.formBuilder.group({
        profile_heading:[null, Validators.compose([Validators.required, Validators.minLength(30), Validators.maxLength(500)])],
        first_name:[null,[Validators.required], ValidationService.nameValid],
        middle_name:[null],
        last_name:[null,[Validators.required], ValidationService.nameValid],
        current_address:[null,[Validators.required], ValidationService.currentaddressValid],
        permanent_address:[null,[],ValidationService.permanentaddressValid],
        gender:[null,Validators.required],
        pincode:[null,[Validators.required], ValidationService.pincodeValid],
        office_phone:[null],
        mobile_phone:[null,[Validators.required],ValidationService.mobileValid],
        home_phone:[null],
        marital_status:[null,Validators.required],
        passport_number:[null,[], ValidationService.passportValid], 
        dob:[null,Validators.required],
        current_package:[null,[],ValidationService.ctcValid],
        email:[null,[Validators.required], ValidationService.emailValid],
        website:[null],
        country:[null,Validators.required],
        state:[null,Validators.required],
        city:[null,Validators.required],
        facebook: [null],
        linkedin: [null],
        stackoverflow: [null],
        github: [null]
      });
     }
  onProfile(){
    this.ProfileService.onProfile().subscribe(
      (result) =>{ 
        this.form.setValue({
          profile_heading: result['data'].user_details.profile_heading,
          first_name: result['data'].user_details.first_name,
          middle_name: result['data'].user_details.middle_name,
          last_name: result['data'].user_details.last_name,
          current_address: result['data'].user_details.current_address,
          permanent_address: result['data'].user_details.permanent_address,
          gender: result['data'].user_details.gender,
          pincode: result['data'].user_details.pincode,
          office_phone: result['data'].user_details.office_phone,
          mobile_phone: result['data'].user_details.mobile_phone,
          home_phone: result['data'].user_details.home_phone,
          marital_status: result['data'].user_details.marital_status,
          passport_number: result['data'].user_details.passport_number,
          dob: result['data'].user_details.dob,
          current_package: result['data'].user_details.current_package,
          email: result['data'].users.email,
          website: result['data'].user_details.website,
          country: result['data'].user_details.country,
          state: result['data'].user_details.state,
          city: result['data'].user_details.city,  
          facebook: result['data'].user_details.facebook,
          linkedin: result['data'].user_details.linkedin,
          stackoverflow: result['data'].user_details.stackoverflow,
          github: result['data'].user_details.github
         });
        },
      (error)=>
      {}
    );
  }
  saveUserProfile(){
    this.ProfileService.saveUserProfile(this.form.value).subscribe(
    (result)=>
     {  },
     (error)=>
     {  }
   );
   
 }
}
