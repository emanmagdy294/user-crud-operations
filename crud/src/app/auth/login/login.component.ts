import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Users } from 'src/app/shared/services/users.service';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  success: boolean = false
  loginForm = new FormGroup({
    email: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.required]),
  })

  constructor(private _Router: Router, private toaster: ToastrService,
    private _AuthService: AuthServiceService) { }

  ngOnInit(): void { }

  submitUser(userForm: FormGroup) {
    this._AuthService.login(this.loginForm.value).subscribe((response: any) => {
      if (response.message == 'success') {
        localStorage.setItem('userToken', response.token);
        this._AuthService.saveCurrentUser();
        this.toaster.success('Login successfully');
        this._Router.navigate(['/users'])
      } else {
        this.toaster.error(response.message);
      }
    })
  }

  get users() {
    return this.loginForm.controls;
  }

}
