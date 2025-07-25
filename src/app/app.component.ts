import {
  Component,
  Inject,
  ViewChildren,
  type AfterViewInit,
  type OnInit,
  type QueryList,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';

import { ContainerComponent } from './container/container.component';
import { EmployeeComponent } from './employee/employee.component';

import { LocalStorageToken } from './localstorage.token';
import { CommonModule } from '@angular/common';
import { requestInterceptor } from './request.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { InitService } from './init.service';

@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    RouterOutlet,
    ContainerComponent,
    EmployeeComponent,
    CommonModule,
  ],

  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements AfterViewInit, OnInit {
  title = 'hotel-app';

  @ViewChildren(HeaderComponent)
  headerChildrenComponent!: QueryList<HeaderComponent>;
  constructor(
    @Inject(LocalStorageToken) private localStorage: Storage,
    private initService: InitService
  ) {}
  ngOnInit(): void {
    console.log('config', this.initService.config);
  }
  ngAfterViewInit(): void {}
}
