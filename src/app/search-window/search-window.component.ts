import { Component } from '@angular/core';
import { countryList } from 'src/system/data/country.data';
import { windows } from 'src/system/enums/window.enum';
import { country } from 'src/system/interfaces/country.interface';


@Component({
  selector: 'app-search-window',
  templateUrl: './search-window.component.html',
  styleUrls: ['./search-window.component.scss']
})
export class SearchWindowComponent {

  myWindowsEnum:windows[]=[windows.InUse,windows.InProgress,windows.Blocked]

  selectedWindow:number=0;

  myCountryList=countryList;
  searchTerm:string="";
  constructor(){}

  ngOnInit():void{
  }

  selectedMode(index:number){
    this.selectedWindow=index;
  }

}
