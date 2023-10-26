import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-get-users',
  templateUrl: './get-users.component.html',
  styleUrls: ['./get-users.component.scss']
})
export class GetUsersComponent implements OnInit {
  dataService: any;
  data: any;
  allUsers: any[] = [];
  constructor(private _user: Users) {
  }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this._user.getUsers().subscribe((data: any) => {
      this.allUsers = data;
    })
  }
}
