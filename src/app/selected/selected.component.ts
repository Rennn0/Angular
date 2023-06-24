import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { country } from 'src/system/interfaces/country.interface';
import { DataShareService } from 'src/system/services/data-share.service';
import { PopupComponent } from './popup/popup.component';

@Component({
  selector: 'app-selected',
  templateUrl: './selected.component.html',
  styleUrls: ['./selected.component.scss'],
})
export class SelectedComponent {
  @Input() selectedCountry!: country;

  constructor(private data: DataShareService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.data.getSelectedCountry().subscribe((country) => {
      if (country !== null) {
        this.selectedCountry = country;
      }
    });
  }

  checkWeather() {
    if (this.selectedCountry) {
      this.data.fetchWeatherData(this.selectedCountry.capital);
    }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(PopupComponent, {
      data: {
        country: this.selectedCountry.country,
        city: this.selectedCountry.capital,
      },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.data.setPopupDialogData(result);
        this.data.setSelectedWindowIndex(1);
        this.data.setActiveWindowIndex(1);
      }
    });
  }
}
