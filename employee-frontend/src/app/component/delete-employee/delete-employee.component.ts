import { Component, OnInit } from '@angular/core';
import { EmployeeServicesService } from 'src/app/services/employee-services.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-delete-employee',
  templateUrl: './delete-employee.component.html',
  styleUrls: ['./delete-employee.component.css']
})
export class DeleteEmployeeComponent implements OnInit {

  id:any;
  constructor(private employeeService :EmployeeServicesService) { }

  ngOnInit(): void {
  }

  deleteEmployee(){
    this.employeeService.deleteEmployee(this.id).subscribe((data)=>{
      Swal.fire({
        title: 'Success',
        text: 'Employee Deleted Successfully',
        icon: 'success',
        confirmButtonText: 'Ok'
      })
      this.id=undefined;
    })
  }

}
