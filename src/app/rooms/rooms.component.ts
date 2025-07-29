import {
  Component,
  inject,
  type DoCheck,
  type OnDestroy,
  type OnInit,
} from '@angular/core';
import type { Room, RoomList } from './rooms';

import { RoomsListComponent } from './rooms-list/rooms-list.component';
import { RoomsService } from './services/rooms.service';
import { CommonModule } from '@angular/common';
import { map, type Subject, type Subscription } from 'rxjs';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-rooms',
  imports: [RoomsListComponent, CommonModule, RouterOutlet],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.scss',
})
export class RoomsComponent implements OnInit, DoCheck, OnDestroy {
  hotelName = 'hotelName';
  numberOfRooms = 10;
  hideRooms = false;
  error$!: Subject<string>;
  private roomService = inject(RoomsService);
  roomsCount$ = this.roomService.getRooms$.pipe(map((rooms) => rooms.length));
  subscription: Subscription | undefined;
  rooms$ = this.roomService.getRooms$;
  rooms: Room = {
    totalRooms: 0,
    availableRooms: 10,
    bookedRooms: 0,
  };
  room?: RoomList;
  roomList: RoomList[] = [];

  constructor() {}

  ngDoCheck(): void {
    console.log('on changes is called');
  }

  ngOnInit(): void {
    // this.subscription = this.roomService.getRooms$.subscribe((rooms) => {
    //   this.roomList = rooms;
    //   this.roomService.getPhotos().subscribe((data) => console.log(data));
    // });
  }

  toggle() {
    this.hideRooms = !this.hideRooms;
  }
  addRoom() {
    const room = {
      rating: 0,
      roomNumber: '4',
      roomType: 'Next Room',
      amenities: 'some funcs',
      price: 15200,
      photos: 'image',
      checkingTime: new Date('10-Nov-2021'),
      checkoutTime: new Date('15-Nov-2021'),
    };

    this.roomService.addRoom(room).subscribe((data) => {
      this.roomList = this.roomList = data;
    });
  }
  selectRoom(room: RoomList) {
    this.room = room;
  }

  editRoom() {
    const room: RoomList = {
      rating: 0,
      roomNumber: '3',
      roomType: 'Next Room',
      amenities: 'some funcs',
      price: 15200,
      photos: 'image',
      checkingTime: new Date('10-Nov-2021'),
      checkoutTime: new Date('15-Nov-2021'),
    };
    this.roomService.editRoom(room).subscribe((data) => (this.roomList = data));
  }

  ngOnDestroy() {
    if (this.subscription) this.subscription.unsubscribe();
  }
}
