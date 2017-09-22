import { Component } from '@angular/core';
import { TasksService } from './tasks.service';
import { Http } from '@angular/http'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  notelist = []

  title = 'app';
  constructor(private _taskService: TasksService) {
    this._taskService.listObserver.subscribe((data) => {
      this.notelist = data;
    })

  }
  ngOnInit() {
    this._taskService.retrieveAll();

  }
}
