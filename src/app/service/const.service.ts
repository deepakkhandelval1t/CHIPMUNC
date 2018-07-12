import { Injectable } from '@angular/core';
@Injectable()
export class ConstService {
  baseUrl;
  constructor() {
   this.baseUrl = "http://localhost:8080/api/" ; 
       if (window.location.host == "dev.chipmunc.com" ) {
             this.baseUrl = 'https://dev-api.chipmunc.com/api/';
           } 
        
   }
             
}
