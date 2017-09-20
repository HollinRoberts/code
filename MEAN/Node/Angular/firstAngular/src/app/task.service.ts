import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
@Injectable()
export class TaskService {
 
  tasks = ['drink coffee or tea', 'build a web app'];
 
  constructor(private _http: Http) { }
 
  retrieveTasks(callback){
    this._http.get('http://localhost.com:1337/tasks').subscribe(
      (response)=> {
        this.tasks=response.json();
        callback(this.tasks);
      },
      (err)=>{
        console.log(err)
      }
    );
  }
 
  createTask(task){
    this.tasks.push(task);
  }

  
}

