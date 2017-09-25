import { Component, OnInit } from '@angular/core';
import { TaskService } from './../task.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _taskService: TaskService,private _redirect:Router) {
    this._taskService.retrieveAll();
   }
  play(){
    console.log("play")
    this._redirect.navigate(['../lets_play'])
  }
 
  ngOnInit() {
  }

}
