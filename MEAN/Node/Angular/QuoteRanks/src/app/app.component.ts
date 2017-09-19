import { Component } from '@angular/core';
import {Quote} from './quote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  quote= new Quote();
  quoteList=[];

  onSubmit(form){
    console.log('in submit');
    console.log(form);
    this.quoteList.push(form);
    
    console.log(this.quoteList);
  }
 
}
