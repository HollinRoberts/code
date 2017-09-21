import { Component, OnInit } from '@angular/core';
import {Product} from './../product';
import { TaskService } from './../task.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products=[]
  
  constructor(private _taskService:TaskService) {
    this.products=this._taskService.retrieveProducts()
   }
  

  ngOnInit() {
  }

  edit(each){
    console.log(each);
  }
  delete(id){
    for(var i =0;i<this.products.length;i++){
      if(this.products[i].id===id){
        this.products.splice(i,1)
      }
    }
  }
}




  
 