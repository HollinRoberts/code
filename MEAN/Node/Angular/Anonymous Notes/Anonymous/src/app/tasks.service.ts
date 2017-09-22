import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import "rxjs";
@Injectable()
export class TasksService {
  notelist = [];
 
  constructor(private _http: Http) { }
 
  listObserver = new BehaviorSubject(this.notelist);

  retrieveAll() {
    return this._http.get(`/note`)
    .subscribe( 
      (notelist) => {
        console.log('Successful response from the server');
        this.notelist = notelist.json();
        this.listObserver.next(this.notelist)
      },
      (err) => {
        console.log(err);
      }
    )
  }
 
  retrieveOne(id) {
    return this._http.get(`/products/${id}`)
    .subscribe( 
      (response) => {
        console.log('Successful response from the server');
        /* code */
      },
      (err) => {
        console.log(err);
      }
    )
  }
 
  create(product) {
    console.log("in tasks create function")
    console.log(product)
    return this._http.post(`/note`, product)
    .subscribe( 
      (response) => {
        console.log('Successful response from the server');
        this.retrieveAll()
      },
      (err) => {
        console.log(err);
      }
    )
  }
 
  update(product, id) {
    return this._http.put(`/products/${id}`, product)
    .subscribe( 
      (response) => {
        console.log('Successful response from the server');
        /* code */
      },
      (err) => {
        console.log(err);
      }
    )
  }
 
  // destroy(id) {
  //   return this._http.put(`/products/${id}`)
  //   .subscribe( 
  //     (response) => {
  //       console.log('Successful response from the server');
  //       /* code */
  //     },
  //     (err) => {
  //       console.log(err);
  //     }
  //   )
  // }
 
}
