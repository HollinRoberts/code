import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable()
export class TaskService {
  user=[]
  error=[]
  questions=[]

  constructor(private _http: Http,private _redirect:Router) { }
    userObserver = new BehaviorSubject(this.user);
    questionObserver = new BehaviorSubject(this.questions)

  createQuestion(question) {
    console.log("in question create function")
    return this._http.post(`/question`, question)
    .subscribe( 
      (response) => {
      
        console.log(response.json())
        if(response.json().errmsg){
          console.log("in response error if")
          this.error=response.json().errmsg
         
          console.log(this.error)
        }
        else{
          console.log('Successful response from the server');
          this.retrieveAll()
          this._redirect.navigate(['../Home'])
        }
      },
      (err) => {
        console.log(err);
        this.error=err
      }
    )
  }
  retrieveAll() {
    return this._http.get(`/question`)
    .subscribe( 
      (questions) => {
        console.log('Successful response from the server');
        this.questions = questions.json();
        this.questionObserver.next(this.questions)
      },
      (err) => {
        console.log(err);
      }
    )
  }
  // getThree() {
  //   for(let i=3;i>0;i--){
  //     let x=Math.floor(Math.random()*this.masterQuestions.length)
  //     console.log(x)
  //     this.gameQuestions.push(this.masterQuestions[x])
  //   }
    
  






}


