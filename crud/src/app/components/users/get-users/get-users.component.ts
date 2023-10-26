import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Users } from 'src/app/shared/services/users.service';
declare var $: any;

@Component({
  selector: 'app-get-users',
  templateUrl: './get-users.component.html',
  styleUrls: ['./get-users.component.scss']
})
export class GetUsersComponent implements OnInit {
  dataService: any;
  data: any;
  allUsers: any[] = [];
  status = [{ type: 'active' }, { type: 'soft-deleted' }];
  postId: any;
  getItem: any;
  role: boolean = false;
  constructor(private _user: Users, private toaster: ToastrService, private http: HttpClient) {
  }

  ngOnInit(): void {
    this.getUsers();
  }

  userForm = new FormGroup({
    name: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.required]),
    phone: new FormControl(null, [Validators.required]),
    status: new FormControl(null, [Validators.required]),
  })

  submitUser(serviceForm: FormGroup) {
    this.http.put<any>(`https://61eab5f1c9d96b0017700ce2.mockapi.io//users-crud-operation/${this.getItem}`, this.userForm.value)
      .subscribe(data => this.postId =
        this.getUsers()
      );
    $("#exampleModal").modal("hide");
    this.toaster.success('update successfully');
  }

  updateUser(item: any) {
    this.userForm.patchValue({
      name: item.name,
      email: item.email,
      phone: item.phone,
      status: item.status
    })
    this.getItem = item.id
  }

  getUsers() {
    this._user.getUsers().subscribe((data: any) => {
      this.allUsers = data;
      // console.log(data);
    })
  }

  removeUser(id: number) {
    this._user.deleteUser(id).subscribe(res => {
      this.getUsers();

      this.toaster.success('The active user has been deleted');

    })
  }
}
