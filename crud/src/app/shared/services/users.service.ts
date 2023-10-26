import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class Users {

    constructor(private _HttpClient: HttpClient) { }

    getUsers(): Observable<any[]> {
        return this._HttpClient.get<any[]>(environment.baseUrl + `users-crud-operation`)
    }

    addUser(formData: any[]): Observable<any[]> {
        return this._HttpClient.post<any[]>(environment.baseUrl + 'users-crud-operation', formData);
    }
}
