import { BookingComponent } from './booking/booking.component';
import { EmployeeComponent } from './employee/employee.component';
import { loginGuard } from './guards/login.guard';
import { roomGuard } from './guards/room.guard';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { RoomsBookingComponent } from './rooms-booking/rooms-booking.component';

import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'rooms',
    loadComponent: () =>
      import('./rooms/rooms.component').then((c) => c.RoomsComponent),
    canActivate: [loginGuard],
    canActivateChild: [roomGuard],
    children: [
      {
        path: 'add',
        loadComponent: () =>
          import('./rooms-add/rooms-add.component').then(
            (m) => m.RoomsAddComponent
          ),
      },
      {
        path: ':id',
        component: RoomsBookingComponent,
      },
    ],
  },
  { path: 'employee', component: EmployeeComponent, canActivate: [loginGuard] },
  { path: 'booking', component: BookingComponent, canActivate: [loginGuard] },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: '**', component: NotfoundComponent },
];
