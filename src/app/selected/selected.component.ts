import { Component, Input } from '@angular/core';
import { country } from 'src/system/interfaces/country.interface';
import { DataShareService } from 'src/system/services/data-share.service';

@Component({
  selector: 'app-selected',
  templateUrl: './selected.component.html',
  styleUrls: ['./selected.component.scss']
})
export class SelectedComponent {

  @Input() selectedCountry:country | undefined;

  constructor(private data:DataShareService){}

  ngOnInit():void{
    this.data.getSelectedCountry().subscribe(country=>{
      if(country!==null){
        this.selectedCountry=country;
      }
    })
  }

  checkWeather(){
    if(this.selectedCountry){
      this.data.fetchWeatherData(this.selectedCountry.capital);
    }
  }
}
