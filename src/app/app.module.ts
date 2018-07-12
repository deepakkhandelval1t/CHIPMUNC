import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { PLATFORM_ID, APP_ID, Inject } from '@angular/core';
import { AppRoutingModule }     from './app-routing.module';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { authService } from './service/auth.service';
import { AppComponent } from './app.component'
import { LoginComponent } from './component/login/login.component';
import { ProfileComponent } from './component/LayoutPages/profile/profile.component';
import { DashboardComponent } from './component/LayoutPages/dashboard/dashboard.component';
import { RegistrationComponent } from './component/LayoutPages/registration/registration.component';
import { CertificationsComponent } from './component/LayoutPages/profile/certifications/certifications.component';
import { EducationComponent } from './component/LayoutPages/profile/education/education.component';
import { EmploymentComponent } from './component/LayoutPages/profile/employment/employment.component';
import {HeaderComponent} from './component/LayoutPages/header/header.component'
import {LayoutComponent} from './component/LayoutPages/layout.component'
import { LanguagesComponent} from './component/LayoutPages/profile/languages/languages.component';
import { VerifyComponent } from './component/verify/verify.component';
import {SidebarComponent} from './component/LayoutPages/profile/sidebar/sidebar.component'
import { isPlatformBrowser } from '@angular/common';
import {ProfilehomeComponent} from './component/LayoutPages/profile/profileHome/profilehome.component'
import { BsDatepickerModule } from 'ngx-bootstrap';
import {FooterComponent} from './component/LayoutPages/footer/footer.component'
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProfileComponent,
    DashboardComponent,
    RegistrationComponent,
    CertificationsComponent,   
    EducationComponent,
    EmploymentComponent,
    HeaderComponent,
    LayoutComponent,
    LanguagesComponent,
    SidebarComponent,
    ProfilehomeComponent,
    VerifyComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'chipmunc' }),
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    ReactiveFormsModule ,
    BsDatepickerModule.forRoot(),
  ],
  providers: [
    {
      provide : HTTP_INTERCEPTORS,
      useClass: authService,
      multi   : true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(APP_ID) private appId: string) {
    const platform = isPlatformBrowser(platformId) ?
      'in the browser' : 'on the server';
    console.log(`Running ${platform} with appId=${appId}`);
  }
 }
