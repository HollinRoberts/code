import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  colors=colors
  
  }
  var colors=[]
  for(let i=0;i<11;i++){
    colors.push('#'+Math.floor(Math.random()*16777215).toString(16))
}