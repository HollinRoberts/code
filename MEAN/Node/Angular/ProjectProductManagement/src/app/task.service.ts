import { Injectable } from '@angular/core';
import {Product} from './product';
@Injectable()
export class TaskService {
  products=[]
  constructor() { }
  count=1
  addProduct(product){
    console.log(product)
    product.id=this.count
    this.products.push(product)
    this.count++
    console.log(this.products)
  }
  retrieveProducts(){
    return this.products
  }

}
