import { Component, OnInit,Input } from '@angular/core';
import { TasksService } from './../tasks.service';
@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  
  @Input() note;

  // constructor(private _taskService: TasksService) { 
  //   this._taskService.listObserver.subscribe((data)=>{
  //     this.notelist=data;
  //   })
  // }

  ngOnInit() {
    
  }

}
