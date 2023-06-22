import { Component } from '@angular/core';
import { DataShareService } from 'src/system/services/data-share.service';

@Component({
  selector: 'app-progress-window',
  templateUrl: './progress-window.component.html',
  styleUrls: ['./progress-window.component.scss'],
})
export class ProgressWindowComponent {
  myProgressData: any;

  constructor(private data: DataShareService) {}

  ngOnInit() {
    this.myProgressData = this.data.getInProgressData();
    console.log(this.myProgressData);
  }
}
