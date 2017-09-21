import { Component, OnInit } from '@angular/core';
import {Product} from './../product';
import { TaskService } from './../task.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  products=[]
  id:any;

  form= new Product
  constructor(private _route:ActivatedRoute,private _taskService:TaskService, private _redirect:Router) {
    this.products=this._taskService.retrieveProducts()
    this._route.paramMap.subscribe( params => {
      this.id=params.get('id')
      
    })
    
   }
   onSubmit(value){
    for(var i =0;i<this.products.length;i++){
      if(this.products[i].id==this.id){
        this.products[i]=this.form
        this.products[i].id=this.id
        console.log(this.products[i])
        this.form= new Product
        
        
      }
    }
    this._redirect.navigate(['../Products'])
   }
  ngOnInit() {
    
    
   
  
  }
  delete(){
    console.log(this.id)
    for(var i =0;i<this.products.length;i++){
      if(this.products[i].id==this.id){
        console.log("in splice if")
        this.products.splice(i,1)
      }
    }
    this._redirect.navigate(['../Products'])
  }
}
