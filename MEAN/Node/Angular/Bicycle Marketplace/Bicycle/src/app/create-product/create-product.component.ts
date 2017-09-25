import { Component, OnInit,Input } from '@angular/core';
import {Bicycle} from './../bicycle'
import { TaskService } from './../task.service';
@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
  create= new Bicycle
  user=[]
  @Input() product;
  constructor(private _taskService: TaskService) {
    this._taskService.userObserver.subscribe((data) => {
      this.user = data;
    })
   }

  ngOnInit() {
  }
  deletethis(product){
    console.log(product)
    this._taskService.destroy()
  }
  newProduct(){
    this.create["user"]=this.user
    this._taskService.createProduct(this.create)
    this.create=new Bicycle
  }

}
