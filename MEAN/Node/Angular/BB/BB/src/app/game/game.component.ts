import { Component, OnInit } from '@angular/core';
import { TaskService } from './../task.service';
import { Game } from './../game';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  masterQuestions=[]
  gameQuestions=[]
  gameResult = new Game
  result={
    question1:'',
    question2:'',
    question3:'',
  }
  score=0
  user=this._taskService.user


  constructor(private _taskService: TaskService,private _redirect:Router) {
        this.masterQuestions = this._taskService.questions;
        for(let i=3;i>0;i--){
          let x=Math.floor(Math.random()*this.masterQuestions.length)
          console.log(x)
          this.gameQuestions.push(this.masterQuestions[x])
          this.masterQuestions.splice(x,1)
        }
   
  }
  results(){
    console.log("in results")
    
      console.log(this.result.question1)
      if(this.result.question1=="true"){
        console.log("in if")
        this.score++
      }
      console.log(this.result.question2)
      if(this.result.question2=="true"){
        console.log("in if")
        this.score++
      }
      console.log(this.result.question3)
      if(this.result.question3=="true"){
        console.log("in if")
        this.score++
      }
    var x = this.score.toString();
    this.gameResult.name=this._taskService.user[0];
    this.gameResult.score=x+"/3";
    this.gameResult.percent=Math.floor(this.score/3*100)
    console.log(this.gameResult)
    this.score=0
    this._taskService.saveResult(this.gameResult)
    
  }
  
  
  ngOnInit() {

    this._taskService.retrieveAll()
 
   
  }

}
