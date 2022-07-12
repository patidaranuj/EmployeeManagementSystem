import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../classes/Employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServicesService {

  constructor(private http:HttpClient) { }

  public getAllEmployees():Observable<any>
  {
    return this.http.get<Employee[]>("http://localhost:8080/getEmployee")
  }
  public addEmployee(employee:Employee)
  {
    return this.http.post("http://localhost:8080/addEmployee",employee);
  }


  public getEmployeeById(id:any):Observable<any>
  {
    return this.http.get<Employee>("http://localhost:8080/getEmployeeById?id="+id);
  }

  public deleteEmployee(id:any)
  {
    return this.http.delete("http://localhost:8080/deleteEmployee?id="+id);
  }

  public updateEmployee(employee:Employee)
  {
    return this.http.put("http://localhost:8080/updateEmployee",employee);
  }
  
}
