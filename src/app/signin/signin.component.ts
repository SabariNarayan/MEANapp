import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  user = {
    email: '',
    password: ''
  };

  constructor(
    private employeeService: EmployeeService,
    private router: Router
  ) {}

  display() {
    this.employeeService.login(this.user.email, this.user.password).subscribe(
      (response) => {
        // Successful login
        const token = response.token;
        // Store the token in local storage
        localStorage.setItem('token', token);
        // Decode the token to retrieve user role
        const decodedToken = this.decodeToken(token);
        const role = decodedToken.role;
        // Proceed with further actions or routing
        console.log('Login success');
        console.log('Token:', token);
        if (role === 'admin') {
          // Navigate to the "List2" component for admin
          this.router.navigate(['/list2']);
        } else {
          // Navigate to the "List" component for users
          this.router.navigate(['/list']);
        }
      },
      (error) => {
        // Error handling
        console.error('Login failed:', error);
        // Show appropriate error message to the user
        alert('Login failed. Please check your credentials.');
      }
    );
  }

  // Function to decode the JWT token
  decodeToken(token: string) {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split('')
        .map(function (c) {
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join('')
    );

    return JSON.parse(jsonPayload);
  }
}
