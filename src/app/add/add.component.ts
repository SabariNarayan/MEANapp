import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service'; // Update the path to the EmployeeService

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  employee = {
    name: '',
    age: '',
    place: '',
    salary: ''
  };

  constructor(private employeeService: EmployeeService, private router: Router) {}

  addEmployee() {
    this.employeeService.addEmployee(this.employee).subscribe(
      (response) => {
        console.log('Employee added successfully');
        // Redirect to the employee list
        this.router.navigate(['/list2']);
      },
      (error) => {
        console.error('Failed to add employee:', error);
        // Show appropriate error message to the user
        alert('Failed to add employee. Please try again.');
      }
    );
  }
  
  
  
}
