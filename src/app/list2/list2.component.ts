import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

interface Employee {
  name: string;
  age: number;
  place: string;
  salary: string;
  editMode: boolean;
}

@Component({
  selector: 'app-list2',
  templateUrl: './list2.component.html',
  styleUrls: ['./list2.component.css']
})
export class List2Component implements OnInit {
  employees: Employee[] = [];
  editMode: boolean = false;

  constructor(private router: Router,private employeeService: EmployeeService) {}

  ngOnInit() {
    this.fetchEmployees();
  }

fetchEmployees() {
  const token = localStorage.getItem('token'); // Retrieve the token from local storage

  if (token) {
    this.employeeService.getEmployees(token).subscribe(
      (response) => {
        this.employees = response.employees;
      },
      (error) => {
        console.error('Failed to fetch employees:', error);
        // Show appropriate error message to the user
        alert('Failed to fetch employees. Please try again.');
      }
    );
  } else {
    console.error('Token not found');
    alert('Token not found. Please log in again.');
  }
}


toggleEditMode(employee: Employee) {
  employee.editMode = !employee.editMode;
}

saveChanges(employee: Employee) {
  // Perform any necessary actions with the edited data
  console.log('Saved changes:', employee);
  employee.editMode = false;
  // Make API call to update the employee data in the backend
  this.employeeService.updateEmployee(employee).subscribe(
    (response) => {
      alert('Employee updated successfully');
    },
    (error) => {
      console.error('Failed to update employee:', error);
      // Show appropriate error message to the user
      alert('Failed to update employee. Please try again.');
    }
  );
}
logout() {
  this.employeeService.logout(); // Call the logout method in the EmployeeService
  this.router.navigate(['/']); // Redirect to the login page
}
}
