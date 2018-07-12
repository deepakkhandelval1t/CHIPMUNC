import { Injectable } from '@angular/core';
import { HttpClientModule ,HttpClient } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';
import {ConstService} from '../service/const.service'

const httpOptions = {
};
@Injectable({
  providedIn: 'root'
})
export class UserdataService {
  constructor(private http: HttpClient , private  constService : ConstService , ) { }
  registrationData(obj) {
    return this.http.post(  this.constService.baseUrl + "account/register", obj, httpOptions)
  }
  verificationData(obj) {
    return this.http.post(  this.constService.baseUrl + "account/verify", obj, httpOptions)
  }
  fetchData() {
    return this.http.get(  this.constService.baseUrl + "account/information", httpOptions)
  }
}
