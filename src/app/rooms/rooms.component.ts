import { Component, type OnInit } from '@angular/core';
import type { Room, RoomList } from './rooms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-rooms',
  imports: [CommonModule],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.scss',
})
export class RoomsComponent implements OnInit {
  hotelName = 'hotelName';
  numberOfRooms = 10;
  hideRooms = false;
  rooms: Room = {
    totalRooms: 0,
    availableRooms: 10,
    bookedRooms: 0,
  };

  roomList: RoomList[] = [
    {
      roomNumber: 1,
      roomType: 'Deluxe Room',
      amenities: 'Air Conditioner, free wifi',
      price: 500,
      photos: 'image',
      checkingTime: new Date('11-Nov-2021'),
      checkoutTime: new Date('12-Nov-2021'),
    },
    {
      roomNumber: 2,
      roomType: 'No Deluxe Room',
      amenities: 'Air Flot, no free wifi',
      price: 500,
      photos: 'image',
      checkingTime: new Date('11-Nov-2021'),
      checkoutTime: new Date('12-Nov-2021'),
    },
  ];

  constructor() {}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  toggle() {
    this.hideRooms = !this.hideRooms;
  }
}
