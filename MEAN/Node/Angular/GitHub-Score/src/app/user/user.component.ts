import { Component, OnInit } from '@angular/core';
import { TaskService } from './../task.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user = []
  constructor(private _taskService: TaskService) {
    this.getUser();
   }
   getUser(){
     this._taskService.retrieveUser((user)=>{
       this.user=user;
     });
   }

  ngOnInit() {
  }
  
}
