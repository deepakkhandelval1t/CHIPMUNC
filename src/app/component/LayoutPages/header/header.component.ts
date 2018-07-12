import { Component } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})

export class HeaderComponent {
  userName: string ="";
  constructor(private router: Router){
     var userName1 =   JSON.parse(localStorage.getItem("currentUser"));
       this.userName = userName1.name;
  }
  logout(){
    localStorage.removeItem("currentUser");
    this.router.navigate(['/login']);
  }

}


  
  


