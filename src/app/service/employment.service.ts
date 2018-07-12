import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ConstService} from '../service/const.service'


@Injectable({
  providedIn: 'root'
})
export class EmploymentService {


  constructor(private http: HttpClient, private  constService : ConstService) {
    
   }
   saveProfessional(user_employments){
    return this.http.post(this.constService.baseUrl + 'employment/insert',user_employments)
  }
  getProfessional(){
    return this.http.get(this.constService.baseUrl + 'employment/getdetails')

  }
}
