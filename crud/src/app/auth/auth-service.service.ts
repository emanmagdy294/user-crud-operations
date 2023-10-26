import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private _HttpClient: HttpClient, private _Router: Router) {
    if (localStorage.getItem('userToken') != null) {
      this.saveCurrentUser();
      this.saveUserData();
    }
  }
  
  currentUser = new BehaviorSubject(null);

  register(formData: any): Observable<any[]> {
    return this._HttpClient.post<any[]>('https://movies-api.routemisr.com/signup', formData);
  }

  login(formData: any): Observable<any[]> {
    return this._HttpClient.post<any[]>('https://movies-api.routemisr.com/signin', formData);
  }

  saveUserData() {
    let token_api: any = localStorage.getItem('userToken');
  }

  saveCurrentUser() {
    let token_api: any = localStorage.getItem('userToken');
    this.currentUser.next(token_api);
  }
  
  logout() {
    this.currentUser.next(null);
    localStorage.removeItem('userToken');
    localStorage.clear();
    this._Router.navigate(['/login']);
  }
}
