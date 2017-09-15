import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {

list = [
{
  email:"bill@gates.com",
  importance:true,
  subject:"New Windows",
  content:"Windows XI will launch in year 2100"
},
{
  email:"ada@lovelace.com",
  importance:true,
  subject:"Programming",
  content:"Enchantress of Numbers"
},
{
  email:"john@carmac.com",
  importance:false,
  subject:"Updated Algo",
  content:"New algorithm for shadow volumes"
},
{
  email:"gabe@newel.com",
  importance:false,
  subject:"HL3",
  content:"Just kidding..."
}
]

colors=colors

}
var colors=[]
for(let i=0;i<11;i++){
  colors.push('#'+Math.floor(Math.random()*16777215).toString(16))
}