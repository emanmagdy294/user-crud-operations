import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNewUserComponent } from './add-new-user/add-new-user.component';

const routes: Routes = [
  { path: '', component: AddNewUserComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddUsersRoutingModule { }
