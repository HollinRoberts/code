import { Component, OnInit } from '@angular/core';
import { TaskService } from './../task.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
scores=[]
score=null
user=this._taskService.user
  constructor(private _taskService: TaskService,private _redirect:Router) {
    this._taskService.scoresAll();
    this._taskService.retrieveAll();
    this._taskService.scoresObserver.subscribe((data) => {
      this.scores = data;
      this.scores.sort(function(a, b){
        return a.percent == b.percent ? 0 : +(a.percent< b.percent) || -1;
      });
    })
    this.score=this._taskService.score
    this._taskService.score=null
  }
  
  
  play(){
    console.log("play")
    this._redirect.navigate(['../lets_play'])
  }
 
  ngOnInit() {
  }

}
