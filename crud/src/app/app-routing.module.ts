import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';

const routes: Routes = [
  { path: '', redirectTo: "users", pathMatch: "full" },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'users',
    loadChildren: () => import('./components/users/users.module').then(m => m.UsersModule)
  },
  {
    path: 'add-user',
    loadChildren: () => import('./components/add-users/add-users.module').then(m => m.AddUsersModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
