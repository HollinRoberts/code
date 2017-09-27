import { Component } from '@angular/core';
import { TaskService } from './task.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private _taskService: TaskService,private _redirect:Router) {
   
    
    }
}
