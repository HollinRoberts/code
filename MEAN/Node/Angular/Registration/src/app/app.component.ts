import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  users=[]
  temp;
  onSubmit(){
    this.users.push(this.user)
    console.log("submitted")
    console.log(this.users)
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
