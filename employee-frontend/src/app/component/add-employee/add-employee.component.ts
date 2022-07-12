import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/classes/Employee';
import { EmployeeServicesService } from 'src/app/services/employee-services.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

 
  employee: Employee = new Employee;


  constructor(private employeeService :EmployeeServicesService) { }

  ngOnInit(): void {
  }

  addemployee(){
    this.employeeService.addEmployee(this.employee).subscribe((data)=>{
      Swal.fire({
        title: 'Success',
        text: 'Employee Added Successfully',
        icon: 'success',
        confirmButtonText: 'Ok'
      })
      this.employee =new Employee;
    })
  }

}
