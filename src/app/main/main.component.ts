import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataShareService } from 'src/system/services/data-share.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  activeWindow: number = 0;
  private windowSubscription: Subscription | null = null;

  constructor(private data: DataShareService) {}

  ngOnInit() {
    this.windowSubscription = this.data
      .getActiveWindowIndex()
      .subscribe((index) => {
        this.activeWindow = index;
      });
  }

  ngOnDestroy() {
    if (this.windowSubscription) {
      this.windowSubscription.unsubscribe();
    }
  }
}
