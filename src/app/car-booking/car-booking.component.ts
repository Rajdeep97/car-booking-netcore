import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { tap } from 'rxjs';
import { autoParts, cars } from './car-booking.interface';
import { CarBookingService } from './car-booking.service';
import { FullNameValidator } from './fulname.validator';

@Component({
  selector: 'app-car-booking',
  templateUrl: './car-booking.component.html',
  styleUrls: ['./car-booking.component.scss'],
})
export class CarBookingComponent implements OnInit {
  CarConfiguratorForm: FormGroup;

  carList: cars;

  partsList: autoParts;

  constructor(
    private fb: FormBuilder,
    private carBookingService: CarBookingService
  ) {}

  ngOnInit(): void {
    this.CarConfiguratorForm = this.fb.group({
      fullName: [
        '',
        [
          Validators.required,
          Validators.maxLength(75),
          Validators.pattern('^[a-zA-Z]+$'),
          // FullNameValidator,
        ],
      ],
      car: ['', Validators.required],
      carParts: ['', Validators.required],
      color: ['#c2185b', Validators.required],
    });

    this.getCars();

    this.getAutoParts();
  }

  getCars(): void {
    this.carBookingService
      .getCars()
      .pipe(
        tap((result) => {
          // console.log(JSON.parse(result));
          // let carArray: cars[] = [];
          // carArray.push(JSON.parse(result));
          this.carList = result;
        })
      )
      .subscribe();
  }

  /**
   *
   */
  getAutoParts(): void {
    this.carBookingService
      .getAutoParts()
      .pipe(
        tap((result) => {
          // console.log(result);
          // let partListArray: autoParts[] = [];
          // partListArray.push(result);
          this.partsList = result;
        })
      )
      .subscribe();
  }

  getPartValue(part: autoParts) {
    return `${part['List of auto parts']}`;
  }
}
