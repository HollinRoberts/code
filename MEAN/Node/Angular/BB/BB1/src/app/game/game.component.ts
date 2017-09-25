import { Component, OnInit } from '@angular/core';
import { TaskService } from './../task.service';
@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  masterQuestions=[]
  gameQuestions=[]

  result={
    question1:'',
    question2:'',
    question3:'',
  }


  constructor(private _taskService: TaskService) {
    this._taskService.questionObserver.subscribe(
      (data)=>{
        this.masterQuestions = data;
        for(let i=3;i>0;i--){
          let x=Math.floor(Math.random()*this.masterQuestions.length)
          console.log(x)
          this.gameQuestions.push(this.masterQuestions[x])
        }
      }
      )

  
    
    console.log(this.gameQuestions)
   
  }
  results(){
    console.log("in results")
  }
  
  
  ngOnInit() {
   
  }

}
