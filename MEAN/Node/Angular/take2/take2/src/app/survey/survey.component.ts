import { Component, OnInit } from '@angular/core';
import { TaskService } from './../task.service';
@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit {
  game=[]
  gameCount=[0,0,0,0]
  user=this._taskService.user
  constructor(private _taskService: TaskService) {
    this._taskService.gameObserver.subscribe((data) => {
      this.game = data;
    })
   }

  vote(id,index){
    console.log(id)
    console.log(index)
    this.gameCount[index]++
    console.log(this.gameCount)
    this._taskService.update(id,this.gameCount)
    this.game=this._taskService.game
  }

  ngOnInit() {
  }

}
