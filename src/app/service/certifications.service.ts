import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ConstService} from '../service/const.service'
@Injectable({
  providedIn: 'root'
})
export class CertificationsService {

  constructor(private http: HttpClient, private  constService : ConstService) {
   }
  saveUserCertificates(user_certifications){
    return this.http.post(this.constService.baseUrl + 'certificates/insert',user_certifications)
  }
  getUserCertificates(){
    return this.http.get(this.constService.baseUrl + 'certificates/getusercertificates')

  }
}
