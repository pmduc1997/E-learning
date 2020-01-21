import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth/auth.guard'
//path
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component'
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';
import { ProfileComponent } from './profile/profile.component'
import { LessonsComponent } from './lessons/lessons.component'
import { ClassesComponent } from './classes/classes.component';
import { LessonsAddComponent } from './lessons-add/lessons-add.component';
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'main',
    component: LayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: DashboardComponent,
      },
      {
        path: 'users',
        component: UsersComponent
      },
      {
        path: 'profile',
        component: ProfileComponent
      },
      {
        path: 'lessons',
        component: LessonsComponent
      },
      {
        path: 'classes',
        component: ClassesComponent
      },
      {
        path: 'lessons-add',
        component: LessonsAddComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
