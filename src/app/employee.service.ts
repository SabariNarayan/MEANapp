import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private baseUrl = 'http://localhost:3000/api';
  

  constructor( private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    const credentials = { email, password }
    return this.http.post<any>(`${this.baseUrl}/login`, credentials)
      .pipe(
        tap(response => {
          const token = response.token;
          console.log('token:', token); // Log the token to verify it is receivedconsole.log('Token:', token); // Log the token to verify it is received
          localStorage.setItem('token', token); // Store the token in localStorage
        })
      );
  }
  logout() {
    localStorage.removeItem('token'); // Remove the token from localStorage
    localStorage.clear(); 
  }

  getEmployees(token: string): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', token);
    return this.http.get<any>(`${this.baseUrl}/employees`, { headers });
  }

  
  addEmployee(employeeData: any): Observable<any> {
    const token = localStorage.getItem('token') || ''; // Provide a default value when token is null
    const headers = new HttpHeaders().set('Authorization', token);
    return this.http.post<any>(`${this.baseUrl}/employees`, employeeData, { headers });
  }
  
  updateEmployee(employeeData: any): Observable<any> {
    const token = localStorage.getItem('token') || '';
    const headers = new HttpHeaders().set('Authorization', token);
    return this.http.put<any>(`${this.baseUrl}/employees/${employeeData._id}`, employeeData, { headers });
  }
  
  deleteEmployee(employeeId: string): Observable<any> {
  const token = localStorage.getItem('token') || '';
  const headers = new HttpHeaders().set('Authorization', token);
  return this.http.delete<any>(`${this.baseUrl}/employees/${employeeId}`, { headers });
}

}
