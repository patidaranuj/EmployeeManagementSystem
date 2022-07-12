import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/classes/Employee';
import { EmployeeServicesService } from 'src/app/services/employee-services.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  employee: Employee = new Employee;
  constructor(private employeeService :EmployeeServicesService) { }

  ngOnInit(): void {
  }

  updateEmployee(){
    this.employeeService.updateEmployee(this.employee).subscribe((data)=>{
      Swal.fire({
        title: 'Success',
        text: 'Employee Updated Successfully',
        icon: 'success',
        confirmButtonText: 'Ok'
      })
      this.employee = new Employee;
    })
  }

}
