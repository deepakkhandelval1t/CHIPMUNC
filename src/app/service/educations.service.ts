import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ConstService} from '../service/const.service'

@Injectable({
  providedIn: 'root'
})
export class EducationService {

  constructor(private http: HttpClient, private  constService : ConstService) {
   }
  saveUserEducation(user_educations){
    return this.http.post(this.constService.baseUrl + 'education/insert',user_educations)
  }
  getUserEducation(){
    return this.http.get(this.constService.baseUrl + 'education/getusereducation')

  }
}
