import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
    providedIn: 'root'
})
export class LaguageService {

    currentLang: any = localStorage.getItem('currentLang');
    private myBehaviorSubject = new BehaviorSubject<string>(this.currentLang);

    constructor() { }

    setValue(value: string) {
        this.myBehaviorSubject.next(value);
    }

    getValue() {
        return this.myBehaviorSubject.asObservable();
    }

}