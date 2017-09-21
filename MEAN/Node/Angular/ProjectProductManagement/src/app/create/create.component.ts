import { Component, OnInit } from '@angular/core';
import {Product} from './../product';
import { TaskService } from './../task.service';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  product1= new Product();
  products=[]

  onSubmit(){
   
    console.log(this.product1.id)
    this._taskService.addProduct(this.product1);
    this.product1= new Product();

    console.log(this.products)
  }
  constructor(private _taskService:TaskService) {
    this.products=this._taskService.retrieveProducts()
   }

  ngOnInit() {
  }

}
