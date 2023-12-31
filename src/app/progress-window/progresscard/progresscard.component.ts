import { Component, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { popupField } from 'src/system/interfaces/popup.interface';
import { DataShareService } from 'src/system/services/data-share.service';

@Component({
  selector: 'app-progresscard',
  templateUrl: './progresscard.component.html',
  styleUrls: ['./progresscard.component.scss'],
})
export class ProgresscardComponent {
  @Input() cardData!: popupField;
  @Input() myIndex!: number;
  indexSub: Subscription;
  activeIndex!: number;
  day: number = 0;
  month: number = 0;

  constructor(private data: DataShareService) {
    this.indexSub = this.data.selectedProgressCard$.subscribe((data) => {
      if (data) {
        this.activeIndex = data;
      }
    });
  }

  ngOnInit() {
    this.day = this.cardData?.date.getDate();
    this.month = this.cardData?.date.getMonth() + 1;
  }

  processPayment() {
    this.data.setPaymentData(this.cardData);
    this.data.selectProgressCard(this.myIndex);
    this.data.setRenderConditino(true);
  }

  processDelete() {
    this.data.setRenderConditino(false);
    this.data.removeProgresData(this.cardData);
  }
}
