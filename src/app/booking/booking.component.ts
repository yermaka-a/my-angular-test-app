import { Component, Inject, type OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  NgModel,
  ReactiveFormsModule,
  Validators,
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
import { MatCheckboxModule } from '@angular/material/checkbox';
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
    MatCheckboxModule,
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
      tnc: new FormControl(false, { validators: [Validators.requiredTrue] }),
      roomId: new FormControl(''),
      guestEmail: ['', [Validators.required, Validators.email]],
      checkinDate: [''],
      checkoutDate: [''],
      bookingStatus: [''],
      bookingAmount: [''],
      bookingDate: [''],
      mobileNumber: [''],
      guestName: ['', [Validators.required, Validators.minLength(5)]],
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
  addPassport() {
    this.bookingForm.addControl('passport', new FormControl(''));
  }
  removePassport() {
    this.bookingForm.removeControl('passport');
  }
  removeGuest(i: number) {
    this.guests.removeAt(i);
  }
}
