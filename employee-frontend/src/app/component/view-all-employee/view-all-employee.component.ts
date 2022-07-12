import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/classes/Employee';
import { EmployeeServicesService } from 'src/app/services/employee-services.service';

@Component({
  selector: 'app-view-all-employee',
  templateUrl: './view-all-employee.component.html',
  styleUrls: ['./view-all-employee.component.css']
})
export class ViewAllEmployeeComponent implements OnInit {

  employees:Employee[] | undefined;
  constructor(private employeeService :EmployeeServicesService) {  }

  ngOnInit(): void {
   this.employeeService.getAllEmployees().subscribe((data)=>{
    this.employees=data;
    console.log(data);
   })
  }

}
