import { Component } from '@angular/core';
import { countryList } from 'src/system/data/country.data';
import { windows } from 'src/system/enums/window.enum';
import { DataShareService } from 'src/system/services/data-share.service';

@Component({
  selector: 'app-search-window',
  templateUrl: './search-window.component.html',
  styleUrls: ['./search-window.component.scss'],
})
export class SearchWindowComponent {
  public windowsKeys: string[] = Object.keys(windows).filter((key) =>
    isNaN(Number(key))
  );
  selectedWindow: number = 0;
  inProgressDataCount: number = 0;
  myCountryList = countryList;
  searchTerm: string = '';

  constructor(private data: DataShareService) {
    this.data.getInProgressCount().subscribe((count: number) => {
      this.inProgressDataCount = count;
    });
  }

  selectedMode(index: number) {
    this.selectedWindow = index;
    this.data.setActiveWindowIndex(this.selectedWindow);
  }
}
