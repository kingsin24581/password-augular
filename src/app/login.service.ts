import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private correctPassword = '123456'; // Replace with the correct password

  constructor() {}

  validatePassword(password: string): boolean {
    return password === this.correctPassword;
  }
}
