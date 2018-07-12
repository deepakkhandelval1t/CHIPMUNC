import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { DashboardComponent } from './component/LayoutPages/dashboard/dashboard.component';
import {ConstService} from './service/const.service';
import { AlwaysAuthGuard } from './service/guard.service'
import { LogInAuthenticiate } from './service/guard.service'
import { ProfileComponent } from './component/LayoutPages/profile/profile.component'
import { CertificationsComponent } from './component/LayoutPages/profile/certifications/certifications.component'
import {EducationComponent} from './component/LayoutPages/profile/education/education.component'
import { EmploymentComponent } from './component/LayoutPages/profile/employment/employment.component'
import {HeaderComponent} from './component/LayoutPages/header/header.component'
import {LayoutComponent} from './component/LayoutPages/layout.component'
import { authService } from './service/auth.service'
import { VerifyComponent } from './component/verify/verify.component';
import {ProfilehomeComponent} from './component/LayoutPages/profile/profileHome/profilehome.component'
import { LanguagesComponent} from './component/LayoutPages/profile/languages/languages.component'

import {FooterComponent} from './component/LayoutPages/footer/footer.component'
import {SidebarComponent} from './component/LayoutPages/profile/sidebar/sidebar.component'


 const routes: Routes = [
    { path:'login', component: LoginComponent } ,
    { path:'verify', component: VerifyComponent } ,
    { path:'', component: LayoutComponent , children:[ 
      { path:'', redirectTo:'dashboard', pathMatch:'full'},
      { path:'dashboard' , component: DashboardComponent },
      {
          path: 'profile', component: ProfileComponent, children: [
            { path: '', component: ProfilehomeComponent },
            { path: 'certificates', component: CertificationsComponent },
            { path: 'education', component: EducationComponent },
            { path: 'employment', component: EmploymentComponent },
            { path: 'header', component: HeaderComponent },
            { path: 'languages', component: LanguagesComponent },
            { path: 'sidebar', component: SidebarComponent }
          ]
      }], canActivate:[AlwaysAuthGuard]  
    },
    { path:'**', redirectTo:'dashboard', pathMatch:'full'},
  ]


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
        ],
  declarations: [] ,
  providers: [
    AlwaysAuthGuard,
    LogInAuthenticiate,
    ConstService,
    authService,
  ],
 exports: [ RouterModule ]  
})
export class AppRoutingModule { }

