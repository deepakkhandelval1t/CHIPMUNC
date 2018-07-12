import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FormGroup, FormControl } from '@angular/forms';

@Injectable()
export class ValidationService {

  constructor() { }

  nameValid(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      if (!control.value.match(new RegExp(/^[a-zA-Z-\s]*$/))) {
        resolve({ 'nameValid': true });
      } else {
        resolve(null);
      }

    });
    return promise;
  }

  currentaddressValid(control: FormControl): Promise<any> | Observable<any>{
    const promise = new Promise<any>((resolve, reject) => {
        if (!control.value.match(new RegExp(/^[0-999a-z\s]*$/))) {
          resolve({ 'currentaddressValid': true });
        } else {
          resolve(null);
        }     
  
      });
      return promise;
  }

  mobileValid(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {

      if (!control.value.match(new RegExp(/^(\+\d{1,3}[- ]?)?\d{11}$/))) {
        resolve({ 'mobileValid': true });
      } else {
        resolve(null);
      }

    });
    return promise;
  }

  pincodeValid(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {

      if (!control.value.match(new RegExp(/^[0-9]{6}$/))) {
        resolve({ 'pincodeValid': true });
      } else {
        resolve(null);
      }

    });
    return promise;
  }
  
  passportValid(control: FormControl): Promise<any> | Observable<any>{
    const promise = new Promise<any>((resolve, reject) => {
      
      if (control.value && !control.value.match(new RegExp(/^[A-Z][0-9]{7}$/))) {
        resolve({ 'passportValid': true });
      } else {
        resolve(null);
      }

    });
    return promise;

  }
  permanentaddressValid(control: FormControl): Promise<any> | Observable<any>{
    const promise = new Promise<any>((resolve, reject) => {
        if (control.value && ! control.value.match(new RegExp(/^[0-999a-z\s]*$/))) {
          resolve({ 'permanentaddressValid': true });
        } else {
          resolve(null);
        }
  
      });
      return promise;
  }

  ctcValid(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {

      if (control.value  && !control.value.match(new RegExp(/^(?:[1-9]{0,7}(?:\.\d{1,2})?|10000000|10000000.00)$/))) {
        resolve({ 'ctcValid': true });
      } else {
        resolve(null);
      }

    });
    return promise;
  }

emailValid(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      if (!control.value.match(new RegExp(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/))) {
        resolve({ 'emailValid': true });
      } else {
        resolve(null);
      }
    });
    return promise;
  } 
  monthValid(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {

      if (!control.value.match(new RegExp(/^(0?[1-9]|1[012])$/))) {
        resolve({ 'monthValid': true });
      } else {
        resolve(null);
      }

    });
    return promise;
  }

  yearValid(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {

      if (!control.value.match(new RegExp(/^\d{4}$/))) {
        resolve({ 'yearValid': true });
      } else {
        resolve(null);
      }

    });
    return promise;
  }

  designationValid(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {

      if (control.value  && !control.value.match(new RegExp(/^[a-zA-Z-\s]*$/))) {
        resolve({ 'designationValid': true });
      } else {
        resolve(null);
      }

    });
    return promise;
  }

  companynameValid(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {

      if (control.value  && !control.value.match(new RegExp(/^[a-zA-Z-\s]*$/))) {
        resolve({ 'companynameValid': true });
      } else {
        resolve(null);
      }

    });
    return promise;
  }

  employmentmonthValid(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {

      if (control.value  && !control.value.match(new RegExp(/^[a-zA-Z-\s]*$/))) {
        resolve({ 'employmentmonthValid': true });
      } else {
        resolve(null);
      }

    });
    return promise;
  }
   
  employmentyearValid(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {

      if (!control.value.match(new RegExp(/^\d{4}$/))) {
        resolve({ 'employmentyearValid': true });
      } else {
        resolve(null);
      }

    });
    return promise;
  }

}