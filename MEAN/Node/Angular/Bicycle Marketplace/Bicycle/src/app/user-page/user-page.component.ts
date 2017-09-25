import { Component, OnInit } from '@angular/core';
import {Bicycle} from './../bicycle'
import { TaskService } from './../task.service';
@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {
  create= new Bicycle
  products=[]
  user=[]
  constructor(private _taskService: TaskService) {
    this._taskService.userObserver.subscribe((data) => {
      this.user = data;
    })
    this._taskService.productObserver.subscribe((data) => {
      this.products = data;
    })
   }

  ngOnInit() {
    this._taskService.productAll()
  }

}
