import { RoomsService } from './../rooms/services/rooms.service';
import { Component, inject, Self, type OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  imports: [],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.scss',
  providers: [],
})
export class EmployeeComponent implements OnInit {
  ngOnInit(): void {}
  empName = 'John';
}
