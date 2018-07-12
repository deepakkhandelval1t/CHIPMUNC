import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ConstService} from '../service/const.service'


@Injectable({
  providedIn: 'root'
})
export class LanguagesService {

  constructor(private http: HttpClient, private  constService : ConstService) {
    
   }
   saveLanguages(user_languages){
    return this.http.post(this.constService.baseUrl + 'languages/insert',user_languages)
  }
   getLanguages(){
    return this.http.get(this.constService.baseUrl + 'languages/getlanguages')

  }
}
