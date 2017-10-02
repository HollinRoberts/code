import { Component } from '@angular/core';
import { GameService } from './game.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  gameState=this._gameService.gameState
  player=this._gameService.player1
  trim=null
  ai=this._gameService.ai
  inPlay=this._gameService.inPlay
  result=this._gameService.result
  playerHealth=[]

  myprompt(){
    this.player.name = prompt("Please enter your name:" );
    this.trim=this.player.name.trim()
    if (this.player.name == null || this.trim == "") {
        this.myprompt();
    } else {
        this._gameService.player1.name=this.player.name;
        console.log(this._gameService.player1.name)
        }
  
    }
  
  drawCard(){
    this.result.msg=''
    this._gameService.playerDraw()
  }

  
  startGame(){
    console.log("in game start");
    this._gameService.result.msg='';
    this._gameService.startGame();
    this.healthBar();
  }

  healthBar(){
    this.playerHealth=[]
    for(let i = 0; i<this.player.health; i++){
      this.playerHealth.push(1)
    }
  }

  endTurn(){
    this._gameService.endTurn()
    this.healthBar();
  }
  constructor(private _gameService: GameService) {
      this._gameService.gameObserver.subscribe((data) => {
      this.gameState = data;
      
      })
      this._gameService.playerObserver.subscribe((data) => {
        this.player = data;
      })
      this._gameService.aiObserver.subscribe((data) => {
        this.ai = data;
      })
      this._gameService.inPlayObserver.subscribe((data) => {
        this.inPlay = data;
      })
      this._gameService.resultObserver.subscribe((data) => {
        this.result = data;
      })
      console.log(this.player)
      this.myprompt()
   }
   
}

