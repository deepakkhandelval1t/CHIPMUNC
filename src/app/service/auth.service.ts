import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable()
export class authService implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let currentUser: any =  JSON.parse(localStorage.getItem("currentUser"));
    if(currentUser)
      req = req.clone({setHeaders: {'Authorization': `Bearer ${currentUser.token}`}}); 
    return next.handle(req);
  }
  saveItemIntoLocalStorage (   obj : any  ) {
   
   localStorage.setItem("currentUser", JSON.stringify(obj));
  }
}
