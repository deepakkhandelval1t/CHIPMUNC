import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {ConstService} from '../service/const.service'

@Injectable({
  providedIn: 'root'
})
export class ProfilehomeService {

  constructor(private http: HttpClient, private  constService : ConstService) {
   }
  saveUserProfile(user_details){
    return this.http.post(this.constService.baseUrl + 'profile/insert',user_details)
  }
  onProfile(){
    return this.http.get(this.constService.baseUrl + 'profile/getUserData')

  }
}