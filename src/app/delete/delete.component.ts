import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  employees: any[] = [];

  constructor(private employeeService: EmployeeService) {}

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

  deleteEmployee(employeeId: string) {
    if (confirm('Are you sure you want to delete this employee?')) {
      this.employeeService.deleteEmployee(employeeId).subscribe(
        (response) => {
          console.log('Employee deleted successfully');
          // Refresh the employee list after deletion
          this.fetchEmployees();
        },
        (error) => {
          console.error('Failed to delete employee:', error);
          alert('Failed to delete employee. Please try again.');
        }
      );
    }
  }
}
