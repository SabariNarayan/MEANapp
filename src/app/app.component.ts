import { Component } from '@angular/core';
import { EmployeeService } from './employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angapp02';
  constructor(private employeeService: EmployeeService , private router :Router) {}
  logout() {
    this.employeeService.logout(); // Call the logout method in the EmployeeService
    this.router.navigate(['/']); // Redirect to the login page
  }
}
