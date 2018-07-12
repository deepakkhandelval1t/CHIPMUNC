import { Component } from '@angular/core';
import { CertificationsService } from '../../../../service/certifications.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidationService } from '../../../../service/validation.service';

@Component({
  selector: 'app-certifications',
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.css'],
  providers: [CertificationsService,ValidationService ]

})
export class CertificationsComponent {
  form : FormGroup;
  constructor(private formBuilder : FormBuilder, private CertificationsService: CertificationsService,
          private ValidationService: ValidationService) {
    this.getUserCertificates();
      this.form = this.formBuilder.group({
        name:[null,[Validators.required], ValidationService.nameValid],
        completed_month:[null,[Validators.required], ValidationService.monthValid],
        completed_year:[null,[Validators.required], ValidationService.yearValid],
        description:[null,Validators.required]
      });
    }
    
    getUserCertificates(){
      this.CertificationsService.getUserCertificates().subscribe(
        (result) =>{ 
          if( result['data'].user_certifications)
            this.form.setValue({
              name: result['data'].user_certifications.name,
              completed_month: result['data'].user_certifications.completed_month,
              completed_year: result['data'].user_certifications.completed_year,
              description: result['data'].user_certifications.description
            });
          
          },
        (error)=>
        {}
      );
    }

    saveUserCertificates(){
      this.CertificationsService.saveUserCertificates(this.form.value).subscribe(
      (result)=>
       {  },
       (error)=>
       {  }
     );
     
   }
}

  
  


