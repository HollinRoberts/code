import { Component } from '@angular/core';
import {Quote} from './quote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  quotes= new Quote();
  list=[];

  onSubmit(form){
    console.log('in submit');
    // console.log(form);
    console.log(this.quotes)
    this.list.push(this.quotes);
    this.quotes= new Quote();
    console.log(this.list[0]);
  }
 
}
