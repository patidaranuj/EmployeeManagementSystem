import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { AddEmployeeComponent } from './component/add-employee/add-employee.component';
import { ViewAllEmployeeComponent } from './component/view-all-employee/view-all-employee.component';
import { ViewEmployeeByIdComponent } from './component/view-employee-by-id/view-employee-by-id.component';
import { UpdateEmployeeComponent } from './component/update-employee/update-employee.component';
import { DeleteEmployeeComponent } from './component/delete-employee/delete-employee.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddEmployeeComponent,
    ViewAllEmployeeComponent,
    ViewEmployeeByIdComponent,
    UpdateEmployeeComponent,
    DeleteEmployeeComponent,
    MatTableModule
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
