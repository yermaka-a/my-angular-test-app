import { inject, Injectable } from '@angular/core';
import { APP_SERVICE_CONFIG } from '../../AppConfig/appconfig.service';
import { HttpClient, HttpRequest } from '@angular/common/http';
import type { RoomList } from '../rooms';
import { shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RoomsService {
  config = inject(APP_SERVICE_CONFIG);
  http = inject(HttpClient);
  getRooms$ = this.http.get<RoomList[]>('/api/rooms').pipe(shareReplay(1));
  constructor() {}

  getRooms() {
    console.log(this.config);
    return this.http.get<RoomList[]>('/api/rooms');
  }

  addRoom(room: RoomList) {
    return this.http.post<RoomList[]>('/api/rooms', room);
  }

  editRoom(room: RoomList) {
    return this.http.put<RoomList[]>(`/api/rooms/${room.roomNumber}`, room);
  }

  getPhotos() {
    const request = new HttpRequest(
      'GET',
      'https://jsonplaceholder.typicode.com/photos',
      {
        reportProgress: true,
      }
    );
    return this.http.request(request);
  }
}
