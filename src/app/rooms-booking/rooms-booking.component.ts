import { Component, inject, type OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-rooms-booking',
  imports: [],
  templateUrl: './rooms-booking.component.html',
  styleUrl: './rooms-booking.component.scss',
})
export class RoomsBookingComponent implements OnInit {
  id?: string;
  router = inject(ActivatedRoute);

  ngOnInit(): void {
    this.router.params.subscribe((params) => (this.id = params['id']));
  }
}
