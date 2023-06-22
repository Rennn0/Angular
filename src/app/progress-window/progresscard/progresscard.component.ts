import { Component, Input } from '@angular/core';
import { popupField } from 'src/system/interfaces/popup.interface';

@Component({
  selector: 'app-progresscard',
  templateUrl: './progresscard.component.html',
  styleUrls: ['./progresscard.component.scss'],
})
export class ProgresscardComponent {
  @Input() cardData!: popupField;
  day: number = 0;
  month: number = 0;
  constructor() {}

  ngOnInit() {
    this.day = this.cardData.date.getDate();
    this.month = this.cardData.date.getMonth() + 1;
  }
}
