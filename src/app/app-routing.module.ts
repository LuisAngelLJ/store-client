import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserRegisterComponent } from './components/user-register/user-register.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';

const routes: Routes = [
  {path: '', component: UserListComponent},
  {path: 'register', component: UserRegisterComponent},
  {path: 'edit/:id', component: EditUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
