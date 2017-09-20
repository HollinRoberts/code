import { Injectable } from '@angular/core';
import { Http } from '@angular/http'

@Injectable()
export class TaskService {

  user={username:''};
  result={}
  constructor(private _http: Http) { }

  setUser(user){
    console.log(user);
    this.user=user;
    console.log(this.user)
  }

  results(){
    return this.result
  }

  retrieveUser(callback){
    console.log(this.user.username)
    this._http.get(`http://api.github.com/users/${this.user.username}`).subscribe(
      (response) => {
        console.log(response.json())
        this.result = response.json();
        callback(this.result);
      },
      (err)=>{
        console.log(err);
      }
    );
  }
}
