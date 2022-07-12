import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/classes/Employee';
import { EmployeeServicesService } from 'src/app/services/employee-services.service';

@Component({
  selector: 'app-view-employee-by-id',
  templateUrl: './view-employee-by-id.component.html',
  styleUrls: ['./view-employee-by-id.component.css']
})
export class ViewEmployeeByIdComponent implements OnInit {

  id:any;
  employee: Employee = new Employee; 

  constructor(private employeeService:EmployeeServicesService) { }

  ngOnInit(): void {
  }

  viewemployee(){
      this.employeeService.getEmployeeById(this.id).subscribe((data)=>{
        this.employee=data;
        console.log(data);
      })
  }


}
