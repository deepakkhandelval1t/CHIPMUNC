import { Component } from '@angular/core';
import { EmploymentService } from '../../../../service/employment.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidationService } from '../../../../service/validation.service';

@Component({
    selector: 'app-employment',
    templateUrl: './employment.component.html',
    styleUrls: ['./employment.component.css'],
    providers: [EmploymentService, ValidationService]
})
export class EmploymentComponent {
    form: FormGroup;
    constructor(private formBuilder: FormBuilder, private EmploymentService: EmploymentService,
            private ValidationService: ValidationService) {
        this.getProfessional();
        this.form = this.formBuilder.group({
            is_current_company: [null,Validators.required],
            designation:  [null,[],ValidationService.designationValid],
            company_name: [null,[], ValidationService.companynameValid],
            worked_month_from:  [null,[], ValidationService.employmentmonthValid],
            worked_month_to:  [null,[],ValidationService.employmentmonthValid],
            worked_year_from:  [null,[],ValidationService.employmentyearValid],
            worked_year_to:  [null,[],ValidationService.employmentyearValid],
            description:  [null,Validators.required]
        });
    }

    getProfessional() {
        this.EmploymentService.getProfessional().subscribe(
            (result) => {
                if (result['data'].user_employments)
                    this.form.setValue({
                        is_current_company: result['data'].user_employments.is_current_company,
                        designation: result['data'].user_employments.designation,
                        company_name: result['data'].user_employments.company_name,
                        worked_month_from: result['data'].user_employments.worked_month_from,
                        worked_month_to: result['data'].user_employments.worked_month_to,
                        worked_year_from: result['data'].user_employments.worked_year_from,
                        worked_year_to: result['data'].user_employments.worked_year_to,
                        description: result['data'].user_employments.description
                    });

            },
            (error) => { }
        );
    }

    saveProfessional() {
        this.EmploymentService.saveProfessional(this.form.value).subscribe(
            (result) => {
            },
            (error) => { }
        );
    }
}
