import { Component, OnInit } from '@angular/core';
import { GameService } from './../game.service';

@Component({
  selector: 'app-hand',
  templateUrl: './hand.component.html',
  styleUrls: ['./hand.component.css']
})
export class HandComponent implements OnInit {
  player=null
  hand=[1,2,1,1,2]
  playCard(x){
    console.log(x)
    this._gameService.cardPlay(x)
  }
  constructor(private _gameService: GameService) {
    this._gameService.playerObserver.subscribe((data) => {
      this.player = data;
    })
   }

  ngOnInit() {
  }

}
