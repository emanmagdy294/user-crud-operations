import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersRoutingModule } from './users-routing.module';
import { GetUsersComponent } from './get-users/get-users.component';
import { ModulesModule } from 'src/app/shared/modules/modules.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


@NgModule({
  declarations: [
    GetUsersComponent,
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    ModulesModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule
  ],exports :[
    Ng2SearchPipeModule
  ],
})
export class UsersModule { }
