import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TaskService} from './task.service';
import { AppComponent } from './app.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskNewComponent } from './task-new/task-new.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    TaskNewComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
