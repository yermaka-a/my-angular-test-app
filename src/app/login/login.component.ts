import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HoverDirective } from '../hover.directive';

@Component({
  selector: 'app-login',
  imports: [FormsModule, HoverDirective],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  constructor() {}

  login() {
    if (this.email === 'admin@gmail.com' && this.password === 'Admin') {
      alert('Login Successful');
    }
  }
}
