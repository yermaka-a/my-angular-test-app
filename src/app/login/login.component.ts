import { Component, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HoverDirective } from '../hover.directive';
import { JsonPipe } from '@angular/common';
import { EmailvalidatorDirective } from '../emailvalidator/emailvalidator.directive';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule, HoverDirective, JsonPipe, EmailvalidatorDirective],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  constructor(@Inject(Router) private readonly route: Router) {}

  login() {
    if (this.email === 'admin@gmail.com' && this.password === 'Admin') {
      alert('Login Successful');
      this.route.navigate(['/rooms', 'add']);
    }
  }
}
