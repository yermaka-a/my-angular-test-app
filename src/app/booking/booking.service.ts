import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BookingService {
  constructor(@Inject(HttpClient) private readonly http: HttpClient) {}

  bookRoom(booking: any) {
    return this.http.post(
      'https://jsonplaceholder.typicode.com/posts',
      booking
    );
  }
}
