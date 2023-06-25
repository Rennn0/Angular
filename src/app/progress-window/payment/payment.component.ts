import { Directive, HostListener, Input, Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { finalData, popupField } from 'src/system/interfaces/popup.interface';
import { DataShareService } from 'src/system/services/data-share.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
})
export class PaymentComponent {
  myPaymentData!: popupField;
  finalData!: finalData;
  date!: string;
  #dataSubscription: Subscription;
  creditCardForm!: FormGroup;
  renderCondition: boolean = false;

  constructor(private data: DataShareService, private fb: FormBuilder) {
    this.#dataSubscription = this.data.getPaymentData().subscribe((data) => {
      if (data) {
        this.myPaymentData = data;
        this.date = this.formatDate(data.date);
      }
    });

    this.data.getRenderCondition$().subscribe((c) => {
      this.renderCondition = c;
    });

    this.creditCardForm = this.fb.group({
      cardNumber: [
        '',
        [
          Validators.required,
          Validators.minLength(12),
          Validators.maxLength(12),
        ],
      ],
      expDate: [
        '',
        [Validators.required, Validators.minLength(5), Validators.maxLength(5)],
      ],
      cvc: [
        '',
        [Validators.required, Validators.minLength(3), Validators.maxLength(3)],
      ],
    });
  }

  processPayment(i1: string, i2: string, i3: string) {
    this.finalData = {
      ...this.myPaymentData,
      cardNum: Number(i1),
      mmyy: i2,
      cvc: Number(i3),
    };
    this.data.setBookedTripData(this.finalData);
    this.data.removeProgresData(this.myPaymentData);
    this.data.setRenderConditino(false);
    this.data.setTrueRenderBooked();
  }

  corrector(event: KeyboardEvent, field: any) {
    if (field.value.length === 2) {
      field.value += '/';
    }
    if (
      event.key === 'Backspace' ||
      event.key === 'Delete' ||
      event.key === ' '
    ) {
      event.preventDefault();
    }
  }

  onInputEntry(event: any, nextInput: any) {
    let input = event.target;
    let length = input.value.length;
    let maxLength = input.attributes.maxlength.value;

    if (length >= maxLength) {
      nextInput.focus();
    }
  }

  numberValidation(event: any) {
    const regEx = /[0-9\+\-\ ]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (!regEx.test(inputChar)) {
      event.preventDefault();
    }
  }

  onSubmit() {}

  formatDate(date: Date) {
    const monthNames = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];

    const day = date.getDate();
    const monthIndex = date.getMonth();
    const year = date.getFullYear();

    return `${day} ${monthNames[monthIndex]} ${year}`;
  }
}

@Directive({
  selector: '[autoTab]',
})
export class AutotabDirective {
  @Input('autoTab') nextTab: any;
  @HostListener('input', ['$event.target']) onInput(input: any) {
    const length = input.value.length;
    const maxLength = input.attributes.maxlength.value;
    if (length >= maxLength) {
      this.nextTab.focus();
    }
  }
}
