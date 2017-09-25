import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import { ActivatedRoute, Router } from '@angular/router';

import "rxjs";
@Injectable()
export class TaskService {
  notelist = [];
  users={};
  error=[];
  products=[];
  user:any
  constructor(private _http: Http,private _redirect:Router) { }
  errorObserver = new BehaviorSubject(this.error);
  userObserver = new BehaviorSubject(this.user);
  productObserver = new BehaviorSubject(this.error);

  retrieveAll() {
    return this._http.get(`/note`)
    .subscribe( 
      (notelist) => {
        console.log('Successful response from the server');
        this.notelist = notelist.json();
        this.userObserver.next(this.notelist)
      },
      (err) => {
        console.log(err);
      }
    )
  }
  productAll() {
    return this._http.get(`/product`)
    .subscribe( 
      (products) => {
        console.log('Successful response from the server');
        this.products = products.json();
        this.productObserver.next(this.products)
      },
      (err) => {
        console.log(err);
      }
    )
  }
 
  login(user) {
    console.log("in task login")
    console.log(user)
    return this._http.get(`/user/${user.email}`)
    .subscribe( 
      (response) => {
        console.log('Successful response from the server');
        if(response.json().password==user.password){
          user=response.json()._id
          this.users[user]=true
          this._redirect.navigate(['../Browse'])
        }
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
 
  create(user) {
    console.log("in tasks create function")
    return this._http.post(`/user`, user)
    .subscribe( 
      (response) => {
      
        console.log(response.json())
        if(response.json().errmsg){
          console.log("in response error if")
          this.error=response.json().errmsg
          this.errorObserver.next(this.error)
          console.log(this.error)
        }
        else{
          console.log('Successful response from the server');
          this._redirect.navigate(['../Browse'])
        }
      },
      (err) => {
        console.log(err);
        this.error=err
      }
    )
  }
  createProduct(product) {
    console.log("in product create function")
    return this._http.post(`/product`, product)
    .subscribe( 
      (response) => {
      
        console.log(response.json())
        if(response.json().errmsg){
          console.log("in response error if")
          this.error=response.json().errmsg
          this.errorObserver.next(this.error)
          console.log(this.error)
        }
        else{
          console.log('Successful response from the server');
          this.productObserver.next(this.products)
        }
      },
      (err) => {
        console.log(err);
        this.error=err
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
