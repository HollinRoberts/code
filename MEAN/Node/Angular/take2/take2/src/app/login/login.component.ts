import { Component, OnInit } from '@angular/core';
import { TaskService } from './../task.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user={
    name:''
  }
  constructor(private _taskService: TaskService,private _redirect:Router) {

   }
  login(){
    this._taskService.user.push(this.user);
    this._redirect.navigate(['./dashboard'])
  
  }
  ngOnInit() {
  }

}
