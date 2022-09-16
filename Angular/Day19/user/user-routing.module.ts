import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdduserComponent } from './adduser/adduser.component';
import { DeleteuserComponent } from './deleteuser/deleteuser.component';
import { ListUserComponent } from './list-user/list-user.component';
import { UpdateuserComponent } from './updateuser/updateuser.component';


const routes: Routes = [
  {
    path:"",component:ListUserComponent
  },
  {
    path:"adduser",component:AdduserComponent
  },
  {
    path:"updateuser",component:UpdateuserComponent
  },
  {
    path:"deleteuser",component:DeleteuserComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
