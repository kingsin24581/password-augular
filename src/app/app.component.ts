import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private loginService: LoginService, private router: Router) {}

  title = 'password';
  password: string = ''; // Initialize the password as an empty string
  maxLength: number = 6; // Set the maximum length of the password
  passwordstatus: boolean = false
  get passwordMask() {
    return '*'.repeat(this.password.length); // Generate the asterisk mask
  }

  onKeyClick(key: string) {
    if (this.password.length < this.maxLength) {
      this.password += key; // Append the clicked key to the password
    }
  }

  clearPassword() {
    this.password = ''; // Clear the password
  }
  login() {
    const correctPassword = '123456'; // Replace with the correct password
    if (this.password === correctPassword) {
      this.router.navigate(['/dashboard']); // Navigate to the DashboardComponent
      this.passwordstatus = true
    } else {
      alert("Password incorect")
      this.clearPassword()
    }
  }
}
