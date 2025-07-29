import {
  Component,
  Inject,
  ViewChildren,
  type AfterViewInit,
  type OnInit,
  type QueryList,
} from '@angular/core';
import {
  NavigationEnd,
  NavigationStart,
  Router,
  RouterOutlet,
} from '@angular/router';
import { HeaderComponent } from './header/header.component';

import { LocalStorageToken } from './localstorage.token';
import { CommonModule } from '@angular/common';

import { InitService } from './init.service';
import { AppNavComponent } from './app-nav/app-nav.component';

import {
  MatDrawer,
  MatDrawerContainer,
  MatDrawerContent,
} from '@angular/material/sidenav';
import { filter } from 'rxjs';
import { LoginService } from './login.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, AppNavComponent],

  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements AfterViewInit, OnInit {
  title = 'hotel-app';

  @ViewChildren(HeaderComponent)
  headerChildrenComponent!: QueryList<HeaderComponent>;
  constructor(
    @Inject(LocalStorageToken) private localStorage: Storage,
    private initService: InitService,
    @Inject(Router) private router: Router
  ) {}
  ngOnInit(): void {
    console.log('config', this.initService.config);
    this.router.events
      .pipe(filter((event) => event instanceof NavigationStart))
      .subscribe((e) => console.log('navigation started', e));

    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((e) => console.log('navigation ended', e));
  }
  ngAfterViewInit(): void {}
}
