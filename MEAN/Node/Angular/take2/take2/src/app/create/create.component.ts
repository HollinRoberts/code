import { Component, OnInit } from '@angular/core';
import { TaskService } from './../task.service';
import { Survey } from './../survey'
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  surveyClean={
    user:null,
    question:"",
    options:[],
    count:[0,0,0,0],
    o1:'',
    o2:'',
    o3:'',
    o4:'',
  }
  survey={
    user:null,
    question:"",
    options:null,
    count:[0,0,0,0],
    o1:'',
    o2:'',
    o3:'',
    o4:'',
  }
  options=[]
  constructor(private _taskService: TaskService) { }

  ngOnInit() {
  }

  addSurvey(){
    this.survey.user=this._taskService.user[0].name
    this.options.push(this.survey.o1)
    this.options.push(this.survey.o2)
    this.options.push(this.survey.o3)
    this.options.push(this.survey.o4)
    console.log(this.options)
    this.survey.options=this.options
    console.log(this.survey.question)
    this._taskService.addSurvey(this.survey)
    console.log(this.survey)
    this.survey= this.surveyClean
  }

}
