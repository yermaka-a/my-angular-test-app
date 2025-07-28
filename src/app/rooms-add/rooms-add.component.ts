import { Component } from '@angular/core';
import { FormsModule, type NgForm } from '@angular/forms';
import type { RoomList } from '../rooms/rooms';
import { JsonPipe } from '@angular/common';
import { RoomsService } from '../rooms/services/rooms.service';

@Component({
  selector: 'app-rooms-add',
  imports: [FormsModule, JsonPipe],
  templateUrl: './rooms-add.component.html',
  styleUrl: './rooms-add.component.scss',
})
export class RoomsAddComponent {
  room: RoomList = {
    rating: 0,
    roomNumber: '',
    roomType: '',
    amenities: '',
    price: 0,
    photos: '',
    checkingTime: new Date(),
    checkoutTime: new Date(),
  };
  successMsg = '';
  constructor(private readonly roomService: RoomsService) {}

  AddRoom(roomsForm: NgForm) {
    this.roomService.addRoom(this.room).subscribe((data) => {
      this.successMsg = 'Room added successfully';
      roomsForm.reset();
    });
  }
}
