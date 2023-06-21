import { Component} from '@angular/core';
import { country } from 'src/system/interfaces/country.interface';
import { DataShareService } from 'src/system/services/data-share.service';
import { WeatherApiService } from 'src/system/services/weather-api.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  weatherData : any;
  intervalID:any;

  constructor(private weatherApi : WeatherApiService,private data:DataShareService){}
  
  ngOnInit():void{
    this.data.getWeatherData().subscribe(data=>{
      if(data){
        this.weatherData=data;
        this.updateLocalTime(data);  
      }
    });

    this.data.fetchWeatherData("Tbilisi");
  }

  updateLocalTime(data:any){
    if(this.intervalID){
      clearInterval(this.intervalID);
    }

    const updateLocalTime=()=>{
      const utcTime=new Date();
      const localTime=new Date(utcTime.getTime()+(data.timezone+utcTime.getTimezoneOffset()*60)*1000);
      this.updateTime(localTime);
    }

    this.intervalID=setInterval(updateLocalTime,1000);
  }

  updateTime(localTime:Date):void{
    const hours=String(localTime.getHours()).padStart(2,'0');
    const minutes=String(localTime.getMinutes()).padStart(2,'0');
    const seconds=String(localTime.getSeconds()).padStart(2,'0');
    const timeString=`${hours}:${minutes}:${seconds}`
    const domElem=document.getElementById("current_time");
    if(domElem){
      domElem.innerHTML=timeString;
    }
  }

}
