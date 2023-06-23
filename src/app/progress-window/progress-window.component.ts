import { Component } from '@angular/core';
import { DataShareService } from 'src/system/services/data-share.service';

@Component({
  selector: 'app-progress-window',
  templateUrl: './progress-window.component.html',
  styleUrls: ['./progress-window.component.scss'],
})
export class ProgressWindowComponent {
  myProgressData: any;
  selectedCard!: number;
  constructor(private data: DataShareService) {}

  ngOnInit() {
    this.myProgressData = this.data.getInProgressData();
  }

  selectCard(index: number) {
    this.selectedCard = index;
  }
}
