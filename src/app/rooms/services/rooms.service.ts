import { inject, Injectable } from '@angular/core';
import { APP_SERVICE_CONFIG } from '../../AppConfig/appconfig.service';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import type { RoomList } from '../rooms';
import { shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RoomsService {
  config = inject(APP_SERVICE_CONFIG);
  headers = new HttpHeaders({ token: '12345564787654gf' });
  http = inject(HttpClient);
  getRooms$ = this.http
    .get<RoomList[]>('/api/rooms', {
      headers: this.headers,
    })
    .pipe(shareReplay(1));
  constructor() {}

  getRooms() {
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
