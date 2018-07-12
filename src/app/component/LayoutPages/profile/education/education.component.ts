import { Component } from '@angular/core';
import { EducationService } from '../../../../service/educations.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidationService } from '../../../../service/validation.service';

@Component({
    selector: 'app-education',
    templateUrl: './education.component.html',
    styleUrls: ['./education.component.css'],
    providers: [EducationService, ValidationService]
})
export class EducationComponent {  

    details:any={};

    form: FormGroup;
    constructor(private formBuilder: FormBuilder, private EducationService: EducationService,
            private ValidationService:ValidationService) {
        this.getUserEducation();
        this.form = this.formBuilder.group({
            institute_name: [null, [Validators.required],ValidationService.nameValid],
            course_mode: [null, Validators.required],
            grade: [null, Validators.required],
            passing_year: [null, Validators.required],

            educourse_type: this.formBuilder.group({
                name: [null,[Validators.required],ValidationService.nameValid],
                status: 0,
            }),
            edu_courses: this.formBuilder.group({
                name: [null,[Validators.required], ValidationService.nameValid],
                status: 0,
            }),
            edu_specializations: this.formBuilder.group({
                name:[null,[Validators.required],ValidationService.nameValid],
                status: 0,
            })

        });
        
    }

    getUserEducation() {
        this.EducationService.getUserEducation().subscribe(
            (result) => {
                this.details = result['data'][0];
            
                if (result['success']){
                   this.form.patchValue({
                        institute_name: result['data'][0].institute_name,
                        course_mode: result['data'][0].course_mode,
                        grade: result['data'][0].grade,
                        passing_year: result['data'][0].passing_year
                   });
                   
                   if(result['data'][0].edu_course_type){
                    (<FormGroup>this.form.controls['educourse_type']).controls['name'].patchValue(result['data'][0].edu_course_type.name);
                    (<FormGroup>this.form.controls['educourse_type']).controls['status'].patchValue(result['data'][0].edu_course_type.status);
                }
                    
                    if(result['data'][0].edu_course){
                        (<FormGroup>this.form.controls['edu_courses']).controls['name'].patchValue(result['data'][0].edu_course.name);
                        (<FormGroup>this.form.controls['edu_courses']).controls['status'].patchValue(result['data'][0].edu_course.status);
               
                    }
                    if(result['data'][0].edu_specialization){
                        (<FormGroup>this.form.controls['edu_specializations']).controls['name'].patchValue(result['data'][0].edu_specialization.name);
                        (<FormGroup>this.form.controls['edu_specializations']).controls['status'].patchValue(result['data'][0].edu_specialization.status);
               
                    }      
                }   
            },  
            (error) => { }
        );
    }

    saveUserEducation(edu: any) {
        edu.eduCourseTypeId = this.details.edu_course_type.id;
        edu.eduCourseId = this.details.edu_course.edu_course_type_id;
        edu.eduSpecializationId = this.details.edu_specialization.edu_course_id;
        edu.UserEducationId = this.details.id;
        this.EducationService.saveUserEducation(edu).subscribe(
            (result) => { },
            (error) => { }
        );
    }
}
   