import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddUsersRoutingModule } from './add-users-routing.module';
import { AddNewUserComponent } from './add-new-user/add-new-user.component';


@NgModule({
  declarations: [
    AddNewUserComponent
  ],
  imports: [
    CommonModule,
    AddUsersRoutingModule
  ]
})
export class AddUsersModule { }
