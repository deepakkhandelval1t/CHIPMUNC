import { Component } from '@angular/core';
import { LanguagesService } from '../../../../service/languages.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidationService } from '../../../../service/validation.service';

@Component({
    selector: 'app-languages',
    templateUrl: './languages.component.html',
    styleUrls: ['./languages.component.css'],
    providers: [LanguagesService, ValidationService]
})
export class LanguagesComponent {
    form: FormGroup;
    constructor(private formBuilder: FormBuilder, private LanguagesService: LanguagesService,
                private ValidationService: ValidationService ) {
        this.getLanguages();
        this.form = this.formBuilder.group({
            name: [null,[Validators.required], ValidationService.nameValid],
            proficency_level:  [null,Validators.required],
            can_read: [null,Validators.required],
            can_write:  [null,Validators.required],
            can_speak:  [null,Validators.required]
        });
    }

    getLanguages() {
        this.LanguagesService.getLanguages().subscribe(result => {
           
                if (result['data'].user_languages)
                
                    this.form.setValue({
                        name: result['data'].user_languages.name,
                        proficency_level: result['data'].user_languages.proficency_level,
                        can_read: result['data'].user_languages.can_read,
                        can_write: result['data'].user_languages.can_write,
                        can_speak: result['data'].user_languages.can_speak
                    });

            },
            (error) => { }
        );
    }

    saveLanguages() {
        this.LanguagesService.saveLanguages(this.form.value).subscribe(
            (result) => {

            },
            (error) => { }
        );

      
    }
}
