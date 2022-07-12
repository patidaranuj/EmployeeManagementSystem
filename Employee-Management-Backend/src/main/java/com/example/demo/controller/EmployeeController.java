package com.example.demo.controller;

import com.example.demo.model.Employee;
import com.example.demo.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
public class EmployeeController {

    @Autowired
    EmployeeService employeeService;

    @GetMapping("/getEmployee")
    public List<Employee> getEmployee() {
        return employeeService.getEmployee();
    }

    @GetMapping("/getEmployeeById")
    public Optional<Employee> getEmployee(@RequestParam int id) {
        return employeeService.getEmployee(id);
    }

    @PostMapping("/addEmployee")
    public void addEmployee(@RequestBody Employee employee) {
        employeeService.addEmployee(employee);
    }

    @CrossOrigin
    @DeleteMapping("/deleteEmployee")
    public void deleteEmployee(@RequestParam int id) {
        employeeService.deleteEmployee(id);

    }

    @PutMapping("/updateEmployee")
    public void updateEmployee(@RequestBody Employee employee) {
        employeeService.updateEmployee(employee);
    }
}
