import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  
  temp;
  onSubmit(){
    this.temp=1
    console.log("submitted")
  }
  user={
    first:"",
    last:"",
    email:"",
    password:"",
    confirm:"",
    street:"",
    apt:"",
    city:"",
    state:"",
    lucky:"",
  };
}
