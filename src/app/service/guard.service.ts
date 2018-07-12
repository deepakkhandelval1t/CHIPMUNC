import { Injectable } from '@angular/core';
import {CanActivate} from "@angular/router";
import { Router } from "@angular/router";
import { HttpClientModule ,HttpClient } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';
import {ConstService} from '../service/const.service'
const httpOptions = {

};
@Injectable({
  providedIn: 'root'
})
 export class GuardService  {
}
 @Injectable()
   export  class LogInAuthenticiate {
    constructor(private http: HttpClient ,  private  constService : ConstService ,) { }
     isLoggedIn() : boolean{
      let user: any = JSON.parse(localStorage.getItem("currentUser"));
    if(user == undefined)
    {
       return false;
    }
    else{
        return true;
    }
  }
   loginData(obj) {
    return this.http.post( this.constService.baseUrl + "account/login", obj, httpOptions)
  }
}
@Injectable()
 export class AlwaysAuthGuard implements CanActivate { 
  constructor(private logInAuthenticiate: LogInAuthenticiate ,  private router: Router,) {}; 
  canActivate() {
    if (this.logInAuthenticiate.isLoggedIn()) { 
      return true;
    } else {
         this.router.navigate(['/login']);
    }
  }
}
