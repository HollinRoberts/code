import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable()
export class TaskService {
  user=[]
  error=[]
  surveys=[]
  game=[]
  constructor(private _http: Http,private _redirect:Router) { }
    surveysObserver = new BehaviorSubject(this.surveys)
    gameObserver = new BehaviorSubject(this.game)

  addSurvey(survey) {
    console.log("in survey create function")
    console.log(survey)
    return this._http.post(`/survey`, survey)
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
          this._redirect.navigate(['../dashboard'])
        }
      },
      (err) => {
        console.log(err);
        this.error=err
      }
    )
  }
  
  retrieveAll() {
    return this._http.get(`/survey`)
    .subscribe( 
      (surveys) => {
        console.log('Successful response from the server');
        this.surveys = surveys.json();
        this.surveysObserver.next(this.surveys)
      },
      (err) => {
        console.log(err);
      }
    )
  }

  getGame(id) {
    console.log(id)
    return this._http.get(`/survey/${id}`)
    .subscribe( 
      (game) => {
        console.log('Successful response from the server');
        console.log(game)
        this.game = game.json();
        this.gameObserver.next(this.game)
        this._redirect.navigate(['../survey'])
      },
      (err) => {
        console.log(err);
      }
    )
  }
  update(id,newCount) {
    console.log(id)
    console.log(newCount)
    return this._http.post(`/survey/${id}`,newCount)
    .subscribe( 
      (game) => {
        console.log('Successful response from the server');
        console.log(game)
        this.game = game.json();
        this.gameObserver.next(this.game)
      },
      (err) => {
        console.log(err);
      }
    )
  }
  delete(id){
    return this._http.delete(`/survey/${id}`)
    .subscribe( 
      (game) => {
        console.log('Successful response from the server');
        console.log(game)
        this.game = game.json();
        this.gameObserver.next(this.game)
        this._redirect.navigate(['../survey'])
      },
      (err) => {
        console.log(err);
      }
    ) 
  }
}
