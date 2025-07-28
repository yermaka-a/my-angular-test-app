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

import { LocalStorageToken } from './localstorage.token';
import { CommonModule } from '@angular/common';

import { InitService } from './init.service';
import { AppNavComponent } from './app-nav/app-nav.component';

import {
  MatDrawer,
  MatDrawerContainer,
  MatDrawerContent,
} from '@angular/material/sidenav';

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
    private initService: InitService
  ) {}
  ngOnInit(): void {
    console.log('config', this.initService.config);
  }
  ngAfterViewInit(): void {}
}
