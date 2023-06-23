import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { popupField } from 'src/system/interfaces/popup.interface';
import { DataShareService } from 'src/system/services/data-share.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
})
export class PaymentComponent {
  myPaymentData!: popupField;
  date!: string;
  #dataSubscription: Subscription;
  constructor(private data: DataShareService) {
    this.#dataSubscription = this.data.getPaymentData().subscribe((data) => {
      if (data) {
        this.myPaymentData = data;
        this.date = this.formatDate(data.date);
        console.log(this.myPaymentData);
      }
    });
  }

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
