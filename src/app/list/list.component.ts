import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  employees: any[] = []; // Define the employees array to hold the fetched data

  constructor(private employeeService: EmployeeService,private router: Router) {}

  ngOnInit() {
    this.fetchEmployees();
  }

  fetchEmployees() {
    const token = localStorage.getItem('token'); // Retrieve the token from local storage

    if (token) {
      this.employeeService.getEmployees(token).subscribe(
        (response) => {
          this.employees = response.employees; // Assign the fetched employees to the employees array
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
  logout() {
    this.employeeService.logout();
    this.router.navigate(['/']);
  }
}
