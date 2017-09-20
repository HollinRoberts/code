import { Component, OnInit } from '@angular/core';
import { TaskService } from './../task.service';
@Component({
  selector: 'app-seattle',
  templateUrl: './seattle.component.html',
  styleUrls: ['./seattle.component.css']
})
export class SeattleComponent implements OnInit {
  weather:any;
  constructor(private _taskService: TaskService) { 
  }
  city='Seattle';
  update(data){
    this.weather=data

  }

  ngOnInit() {
    console.log('in oninit')
    this.weather=this._taskService.getWeather(this.city,(response)=>{
      this.weather=response;
    }
  )
    console.log(this.weather)
  }

}
