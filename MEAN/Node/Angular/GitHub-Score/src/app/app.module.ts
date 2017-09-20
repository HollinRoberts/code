import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TaskService} from './task.service';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { FormsModule } from '@angular/forms';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    FormComponent
  ],
  imports: [
    HttpModule,
    FormsModule,
    BrowserModule,
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
