import { Component, OnInit } from '@angular/core';
import { GameService } from './../game.service'
@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})
export class PlayComponent implements OnInit {
inPlay=[]
unPlay(x){
  this._gameService.unPlay(x)
}

  constructor(private _gameService: GameService) {
    this._gameService.inPlayObserver.subscribe((data) => {
      this.inPlay = data;
    })
   }

  ngOnInit() {
  }

}
