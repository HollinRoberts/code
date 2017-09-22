import { Component, OnInit } from '@angular/core';
import {Notes} from './../notes';
import { TasksService } from './../tasks.service';
@Component({
  selector: 'app-headder',
  templateUrl: './headder.component.html',
  styleUrls: ['./headder.component.css']
})
export class HeadderComponent implements OnInit {

  note= new Notes();
  onSubmit(){
    console.log("in submit")
    console.log(this.note)
    this._taskService.create(this.note)
    this._taskService.retrieveAll()
  }
  constructor(private _taskService: TasksService) { }

  ngOnInit() {
  }

}
