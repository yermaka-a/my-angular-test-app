import { inject, Injectable } from '@angular/core';
import { APP_SERVICE_CONFIG } from '../../AppConfig/appconfig.service';
import { HttpClient } from '@angular/common/http';
import type { RoomList } from '../rooms';

@Injectable({
  providedIn: 'root',
})
export class RoomsService {
  config = inject(APP_SERVICE_CONFIG);
  constructor(private http: HttpClient) {}
  getRooms() {
    console.log(this.config);
    return this.http.get<RoomList[]>('/api/rooms');
  }
}
