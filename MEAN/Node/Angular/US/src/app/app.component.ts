import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  date:any = new Date();
  toggled=0

  toggle(x){
      this.toggled=x;
      if(x===0){
        this.date = new Date();
      }
      if(x===1){
        this.date = new Date();
      }
      if(x===2){ 
        this.date=new Date();
        this.date=this.date.setHours(this.date.getHours()+1);
      }
      if(x===3){
        this.date=new Date();
        this.date=this.date.setHours(this.date.getHours()+2);
      }
      if(x===4){
        this.date=new Date();
        this.date=this.date.setHours(this.date.getHours()+3);
      }
  }

}
