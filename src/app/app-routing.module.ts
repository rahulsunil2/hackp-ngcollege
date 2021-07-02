import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DepartmentComponent } from './pages/department/department.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  { path: '', component: LoginComponent, data: { name: 'Login' } },
  {
    path: 'dashboard',
    component: DashboardComponent,
    data: { name: 'Dashboard' },
  },
  {
    path: 'departments',
    component: DepartmentComponent,
    data: { name: 'Departments' },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
