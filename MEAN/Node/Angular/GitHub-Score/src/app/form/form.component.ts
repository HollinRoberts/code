import { Component, OnInit } from '@angular/core';
import { TaskService } from './../task.service';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(private _taskService: TaskService) { 
    
  }
  score=0
  ngOnInit() {
  }
  results={
    
  }
  onSubmit(){
    console.log('in submit')
    console.log(this.user)
    this._taskService.setUser(this.user)
    this._taskService.retrieveUser((user)=>{
    this.user=user;
    this.results=this._taskService.results()
    console.log(this.results)
    this.score=1
    })
  }
  user={
    username:'',
  }
}
