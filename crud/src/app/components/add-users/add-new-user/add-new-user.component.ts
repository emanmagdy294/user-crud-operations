import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Users } from 'src/app/shared/services/users.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-new-user',
  templateUrl: './add-new-user.component.html',
  styleUrls: ['./add-new-user.component.scss']
})
export class AddNewUserComponent implements OnInit {
  status = [{ type: 'active' }, { type: 'soft-deleted' }];
  roles = [{ role: 'admin' }, { role: 'basic user' }];
  success: boolean = false
  userForm = new FormGroup({
    name: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.required]),
    phone: new FormControl(null, [Validators.required]),
    status: new FormControl(null, [Validators.required]),
    role: new FormControl(null, [Validators.required]),
  })
  timer: any;
  constructor(private _service: Users, private toaster: ToastrService) { }

  ngOnInit(): void { }

  submitUser(userForm: FormGroup) {
    this._service.addUser(userForm.value).subscribe(
      (response: any) => {
        this.timer = setTimeout(() => {
          this.success = true;
        }, 100);
        this.toaster.success('User added successfully');
        this.userForm.reset();
      })
  }

  onFocus(): void {
    this.success = false;
  }

  get users() {
    return this.userForm.controls;
  }
}
