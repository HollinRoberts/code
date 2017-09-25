import { Component, OnInit,Input } from '@angular/core';
import { TaskService } from './../task.service';
import { User } from './../user';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  error=[]
  user1= new User();
  login1={
    email:"",
    password:"",
  }
  product="get a random bike"

  onSubmit(){
    console.log("in submit")
    this._taskService.create(this.user1)
    this.user1=new User()

  }
  onLogin(){
    console.log("in Login")
    console.log(this.login1)
    console.log(this.login1.email)
    this._taskService.login(this.login1)
    
  }
  constructor(private _taskService: TaskService) {
    this._taskService.errorObserver.subscribe((data) => {
      this.error = data;
    })
   }

  ngOnInit() {
    this._taskService.retrieveAll();
  }

}
