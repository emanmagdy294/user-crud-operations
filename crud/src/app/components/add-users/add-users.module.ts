import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddUsersRoutingModule } from './add-users-routing.module';
import { AddNewUserComponent } from './add-new-user/add-new-user.component';
import { ModulesModule } from 'src/app/shared/modules/modules.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AddNewUserComponent
  ],
  imports: [
  CommonModule,
    AddUsersRoutingModule,
    ModulesModule,
    ReactiveFormsModule
  ]
})
export class AddUsersModule { }
