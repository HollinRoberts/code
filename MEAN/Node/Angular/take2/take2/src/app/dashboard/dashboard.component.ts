import { Component, OnInit } from '@angular/core';
import { TaskService } from './../task.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  surveys=[]

  logout(){
    this._taskService.user.pop();
    this._redirect.navigate(['../login'])

  }
  constructor(private _taskService: TaskService,private _redirect:Router) {
    this._taskService.surveysObserver.subscribe((data) => {
      this.surveys = data;
    })
    this._taskService.retrieveAll()

   }

   play(id){
     console.log(id)
     this._taskService.getGame(id)
   }

  ngOnInit() {
  }
  delete(id){
    this._taskService.delete(id)
  }
}
