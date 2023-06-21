import { Component, EventEmitter } from '@angular/core';
import { country } from 'src/system/interfaces/country.interface';
import { Input,Output } from '@angular/core';
import { DataShareService } from 'src/system/services/data-share.service';


@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent {

  @Input() countryData:country | undefined;

  constructor(private data:DataShareService){}

  selectCountry(){
    if(this.countryData){
      this.data.setSelectedCountry(this.countryData);
    }
  }
}
