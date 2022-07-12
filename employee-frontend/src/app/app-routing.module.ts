import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './component/add-employee/add-employee.component';
import { DeleteEmployeeComponent } from './component/delete-employee/delete-employee.component';
import { UpdateEmployeeComponent } from './component/update-employee/update-employee.component';
import { ViewAllEmployeeComponent } from './component/view-all-employee/view-all-employee.component';
import { ViewEmployeeByIdComponent } from './component/view-employee-by-id/view-employee-by-id.component';

const routes: Routes = [
  {
    path:'viewallemployees',
    component:ViewAllEmployeeComponent
  },
  {
    path:'addemployee',
    component:AddEmployeeComponent
  },
  {
    path:'viewemployeebyid',
    component:ViewEmployeeByIdComponent
  },
  {
    path:'deleteemployee',
    component:DeleteEmployeeComponent
  },
  {
    path:'updateemployee',
    component:UpdateEmployeeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
