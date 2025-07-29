import { EmployeeComponent } from './employee/employee.component';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { RoomsAddComponent } from './rooms-add/rooms-add.component';
import { RoomsBookingComponent } from './rooms-booking/rooms-booking.component';
import { RoomsComponent } from './rooms/rooms.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'rooms',
    component: RoomsComponent,
  },
  { path: 'employee', component: EmployeeComponent },
  {
    path: 'rooms/add',
    loadComponent: () =>
      import('./rooms-add/rooms-add.component').then(
        (m) => m.RoomsAddComponent
      ),
  },
  { path: 'rooms/:id', component: RoomsBookingComponent },
  { path: '', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: NotfoundComponent },
];
