/**
 * @author Kishor Patil
 * @email kishor.patil0589@gmail.com
 * @create date 2018-07-09 12:52:50
 * @modify date 2018-07-09 12:52:50
 * @desc [description]
*/
import { NgModule }                                   from '@angular/core';
import { Routes, RouterModule }                       from '@angular/router';

import { LoginComponent }                             from './login/login.component'
import { DashboardComponent }                         from './features/dashboard/dashboard.component'
const routes: Routes = [
  {
    path  : '',
    redirectTo: '',
    pathMatch: 'full',
    component : LoginComponent
  },{
    path  : 'dash',
    component : DashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }