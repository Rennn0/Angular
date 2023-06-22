import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { popupField } from 'src/system/interfaces/popup.interface';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss'],
})
export class PopupComponent {
  myPopupInterface: popupField = {
    country: this.dialogData.country,
    capital: this.dialogData.city,
    visitorsN: 0,
    date: new Date(),
    time: '',
    guide: false,
  };
  availableTimes: string[] = ['9-12', '12-15', '15-18', '18-21'];
  minDate: Date;
  maxDate: Date;
  constructor(
    public dialogRef: MatDialogRef<PopupComponent>,
    @Inject(MAT_DIALOG_DATA) public dialogData: any
  ) {
    this.minDate = new Date();
    this.minDate.setDate(this.minDate.getDate() + 1);
    this.maxDate = new Date();
    this.maxDate.setMonth(this.maxDate.getMonth() + 2);
  }

  onYesClick(): void {
    this.dialogRef.close(this.myPopupInterface);
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
