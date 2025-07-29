import { CanActivateChildFn } from '@angular/router';
import { LoginService } from '../login.service';
import { inject } from '@angular/core';

export const roomGuard: CanActivateChildFn = (childRoute, state) => {
  const loginService = inject(LoginService);
  return loginService.isAdmin;
};
