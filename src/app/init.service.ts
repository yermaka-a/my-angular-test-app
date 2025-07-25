import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { tap, firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InitService {
  config: any;
  constructor(@Inject(HttpClient) private http: HttpClient) {}

  init() {
    console.log('init worked');
    return firstValueFrom(
      this.http
        .get('./src/app/assets/config.json')
        .pipe(tap((config) => (this.config = config)))
    );
  }
}
