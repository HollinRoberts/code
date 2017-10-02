import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import { ActivatedRoute, Router } from '@angular/router';
import { Http } from '@angular/http';
import { Player } from './player';
import { Result } from './result';

@Injectable()
export class GameService {
  player1= new Player
  ai= new Player
  result= new Result
  inPlay=[]
  gameState="new"
  constructor() {
    console.log(this.player1.hand)
   }
  inPlayObserver = new BehaviorSubject(this.inPlay)
  playerObserver = new BehaviorSubject(this.player1)
  gameObserver = new BehaviorSubject(this.gameState)
  aiObserver = new BehaviorSubject(this.ai)
  resultObserver = new BehaviorSubject(this.result)
  playerDraw(){
      for(let i=4;i>0;i--){
      this.player1.hand.push(Math.floor(Math.random()*3));
      }
      this.player1.hasDrawn=true
      this.playerObserver.next(this.player1) 
  }
  cardPlay(index){
    this.inPlay.push(this.player1.hand[index])
    console.log(this.inPlay)
    this.player1.hand.splice(index,1)
    this.inPlayObserver.next(this.inPlay)
  }
  unPlay(index){
    this.player1.hand.push(this.inPlay[index])
    console.log(this.inPlay)
    this.inPlay.splice(index,1)
    this.inPlayObserver.next(this.inPlay)
    this.playerObserver.next(this.player1)
  }
  startGame(){
    this.clarAll()
    console.log("in game service")
    this.gameState="player"
    console.log(this.gameState)
    this.gameObserver.next(this.gameState)
    this.result.msg=''
    this.playerDraw()
    this.aiObserver.next(this.ai)
  }
  endTurn(){
    this.player1.hasDrawn=false
    let sword = 0
    let potion = 0
    for(let i = 0;i<this.inPlay.length;i++){
      if(this.inPlay[i]<=1){
        sword++
      }
      if(this.inPlay[i]>1){
        potion++
      }
    }
    if (sword > 0) {
      this.result.dealt= (sword * 2) - 1;
      this.ai.health -= (sword * 2) - 1;

    }
    if (potion > 0) {
      this.result.healed= (potion * 2) - 1;
      this.player1.health += (potion * 2) - 1;
      }
    this.inPlay=[]
    this.inPlayObserver.next(this.inPlay)
    if(this.ai.health <= 0) {
   
      this.result.msg=( "Congrats! You dealt "+this.result.dealt+" slaying your foe!")
      
      this.gameState='new';
      this.gameObserver.next(this.gameState)
      this.player1.hasDrawn=true;
      this.playerObserver.next(this.player1);
      this.resultObserver.next(this.result)
    }
    else{
      this.aiTurn()
      if(this.player1.health<=0){

        this.result.msg=( "Your opponent dealt "+this.result.aiDealt+" defeating you.");
       
        this.gameState='new';
        this.player1.hasDrawn=true;
        this.resultObserver.next(this.result);
        this.playerObserver.next(this.player1);
        this.gameObserver.next(this.gameState);
      }
      else
      {this.buildResultString()
      this.resultObserver.next(this.result)
      }
    }
   
  }


  aiTurn(){
    console.log("in ai turn")
    let swords=null;
    let potions=null;
    for(let i=4;i>0;i--){
      let rand=null;
      rand=(Math.floor(Math.random()*3));
      if(rand<=1){
        swords++
      }
      if(rand>1){
        potions++
      }
    }
    this.ai.hand[0]=swords;
    this.ai.hand[1]=potions;
    console.log(this.ai.hand)
    if(this.ai.hand[0]>this.ai.hand[1]){
      this.result.aiDealt=(this.ai.hand[0] * 2) - 1;
      this.player1.health-=this.result.aiDealt
      this.ai.hand[0]=0
    }
    else if(this.ai.hand[0]<=this.ai.hand[1]){
      this.result.aiHealed=(this.ai.hand[1] * 2) - 1;
      this.ai.health+=this.result.aiHealed
      this.ai.hand[1]=0
    }
  }


  clarAll(){
    this.gameState='new';
    this.player1.health=10;
    this.player1.hand=[];
    this.ai.hand=[];
    this.ai.health=10;
    this.inPlay=[];
    this.gameObserver.next(this.gameState)
    this.result.aiDealt=0;
    this.result.aiHealed=0;
    this.result.dealt=0;
    this.result.healed=0;
    this.result.msg=''
  }

  buildResultString(){
    if(this.result.dealt!=0 && this.result.dealt!=null){
      this.result.msg+="Congrats! You dealt "+this.result.dealt+" dmg! "
    }
    if(this.result.healed!=0 && this.result.healed!=null){
      this.result.msg+="You healed for "+this.result.healed+"! "
    }
    if(this.result.aiDealt!=0 && this.result.aiDealt!=null){
      this.result.msg+="Your opponent dealt "+this.result.aiDealt+" dmg to you! "
    }
    if(this.result.aiHealed!=0 && this.result.aiHealed!=null){
      this.result.msg+="Your opponent healed for "+this.result.aiHealed+"! "
    }
  }
}
