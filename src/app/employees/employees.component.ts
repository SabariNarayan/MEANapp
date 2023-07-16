import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../link.service';



@Component({
  selector: 'app-employees',
  template: `
    <h2>Employees</h2>
    <ul>
      <li *ngFor="let employee of employees">{{ employee.name }}</li>
    </ul>
  `
})
export class EmployeesComponent implements OnInit {
  employees: any[] = [];

  constructor(private employeeService: EmployeeService) {}

  ngOnInit() {
    this.employeeService.getEmployees().subscribe(
      (data) => {
        this.employees = data;
      },
      (error) => {
        console.error('Error fetching employees:', error);
      }
    );
  }
}
