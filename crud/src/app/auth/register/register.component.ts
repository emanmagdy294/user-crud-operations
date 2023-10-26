import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthServiceService } from '../auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private _AuthService: AuthServiceService, private _Router: Router) { }

  ngOnInit(): void {
  }

  registerForm = new FormGroup({
    first_name: new FormControl(null, [Validators.required]),
    last_name: new FormControl(null, [Validators.required]),
    age: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required]),
  })

  submitUser(registerForm: FormGroup) {
    this._AuthService.register(registerForm.value).subscribe((response: any) => {
      this._Router.navigate(['/login'])
    })
  }

  get users() {
    return this.registerForm.controls;
  }
}
