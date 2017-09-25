import { Component, OnInit } from '@angular/core';
import{ Question } from "../question"
import { TaskService } from './../task.service';
@Component({
  selector: 'app-new-question',
  templateUrl: './new-question.component.html',
  styleUrls: ['./new-question.component.css']
})
export class NewQuestionComponent implements OnInit {

  newQuestion= new Question

  addQuestion(){
    console.log(this.newQuestion)
    this._taskService.createQuestion(this.newQuestion)
    this.newQuestion= new Question
  }
  cancel(){
    console.log("in cancel")
    
  }

  constructor(private _taskService: TaskService) { }

  ngOnInit() {
  }

}
