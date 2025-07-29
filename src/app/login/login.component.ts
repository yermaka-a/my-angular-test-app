import { Component, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HoverDirective } from '../hover.directive';
import { JsonPipe } from '@angular/common';
import { EmailvalidatorDirective } from '../emailvalidator/emailvalidator.directive';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  imports: [FormsModule, HoverDirective, JsonPipe, EmailvalidatorDirective],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(
    @Inject(Router) private readonly route: Router,
    @Inject(LoginService) private readonly loginService: LoginService
  ) {}

  login() {
    const isLoggedIn = this.loginService.login(this.email, this.password);
    if (isLoggedIn) {
      this.route.navigate(['/rooms']);
    }
  }
}
