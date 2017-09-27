import { Component } from '@angular/core';
import { TaskService } from './task.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  user=null;
 
  myprompt(){
    this.user = prompt("Please enter your name:" );
    if (this.user == null || this.user == "") {
        this.myprompt();
    } else {
        this._taskService.user.push(this.user);
        console.log(this._taskService.user)
        }
  
    }
  
    logout(){
      this._taskService.user.pop();
      this._redirect.navigate(['../Home'])
      this.myprompt()
    }

  constructor(private _taskService: TaskService,private _redirect:Router) {
  this.myprompt();
 
  
  }
}
