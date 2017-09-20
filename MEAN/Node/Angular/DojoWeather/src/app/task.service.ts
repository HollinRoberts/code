import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
@Injectable()
export class TaskService {
  key='a76f04d562fceb301d6bd7a72e9964d1'
  weather=[]

  constructor(private _http:Http) { }

  getWeather(city,callback):any{
    this._http.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${this.key}&units=imperial`).subscribe(
      (response) => {
        
        this.weather=response.json();
        console.log(this.weather)
        callback(response.json())
      },
      (err) => {
        console.log('error')
      }
    )
  }
}
