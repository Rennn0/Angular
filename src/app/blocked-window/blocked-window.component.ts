import { Component } from '@angular/core';
import { finalData } from 'src/system/interfaces/popup.interface';
import { DataShareService } from 'src/system/services/data-share.service';

@Component({
  selector: 'app-blocked-window',
  templateUrl: './blocked-window.component.html',
  styleUrls: ['./blocked-window.component.scss'],
})
export class BlockedWindowComponent {
  myBookedData!: Array<finalData>;

  constructor(private data: DataShareService) {
    this.data.getBookedTripData().subscribe((data) => {
      if (data) {
        this.myBookedData = data;
      }
    });
  }
}
