import { Component, inject, type DoCheck, type OnInit } from '@angular/core';
import type { Room, RoomList } from './rooms';

import { RoomsListComponent } from './rooms-list/rooms-list.component';
import { RoomsService } from './services/rooms.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-rooms',
  imports: [RoomsListComponent, CommonModule],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.scss',
})
export class RoomsComponent implements OnInit, DoCheck {
  hotelName = 'hotelName';
  numberOfRooms = 10;
  hideRooms = false;
  rooms: Room = {
    totalRooms: 0,
    availableRooms: 10,
    bookedRooms: 0,
  };
  room?: RoomList;
  roomList: RoomList[] = [];

  private roomService = inject(RoomsService);

  constructor() {}

  ngDoCheck(): void {
    console.log('on changes is called');
  }

  ngOnInit(): void {
    this.roomService.getRooms$.subscribe((rooms) => {
      this.roomList = rooms;
      this.roomService.getPhotos().subscribe((data) => console.log(data));
    });
  }

  toggle() {
    this.hideRooms = !this.hideRooms;
  }
  addRoom() {
    const room = {
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
}
