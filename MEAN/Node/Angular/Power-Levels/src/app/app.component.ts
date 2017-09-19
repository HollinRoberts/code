import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  powers=0;
  onSubmit(){
    console.log(this.powers)
    console.log(this.user.power)
    this.powers=this.user.power
    console.log(this.powers)
  }
  user= {power:0} 
}
