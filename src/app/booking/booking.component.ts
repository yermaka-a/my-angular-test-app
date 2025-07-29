import { Component, Inject, type OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  ReactiveFormsModule,
  type FormArray,
  type FormGroup,
} from '@angular/forms';
import { ConfigService } from '../services/config.service';
import { JsonPipe } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-booking',
  imports: [
    ReactiveFormsModule,
    JsonPipe,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatExpansionModule,
    MatIconModule,
  ],
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.scss',
})
export class BookingComponent implements OnInit {
  bookingForm!: FormGroup;

  constructor(
    @Inject(ConfigService) private configService: ConfigService,
    @Inject(FormBuilder) private readonly fb: FormBuilder
  ) {}
  get guests() {
    return this.bookingForm.get('guests') as FormArray;
  }
  ngOnInit() {
    this.bookingForm = this.fb.group({
      roomId: new FormControl({ value: '2', disabled: true }),
      guestEmail: [''],
      checkinDate: [''],
      checkoutDate: [''],
      bookingStatus: [''],
      bookingAmount: [''],
      bookingDate: [''],
      mobileNumber: [''],
      guestName: [''],
      guestAddress: [''],
      guestCity: [''],
      guestState: [''],
      guestCountry: [''],
      guestZipCode: [''],
      guestCount: [''],
      address: this.fb.group({
        addressLine1: [''],
        addressLine2: [''],
        city: [''],
        state: [''],
        country: [''],
        pinCodes: [''],
      }),
      guests: this.fb.array([
        this.fb.group({
          guestName: [''],
          age: new FormControl(''),
        }),
      ]),
    });
  }
  addBooking() {
    console.log(this.bookingForm.value);
  }
  addGuest() {
    this.guests.push(
      this.fb.group({
        guestName: [''],
        age: new FormControl(''),
      })
    );
  }
}
