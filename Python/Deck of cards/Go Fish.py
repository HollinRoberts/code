from random import *
from Player import Player

class Game(object):
    def __init__(self,players):
        self.gameName="Go_Fish"
        self.playersNum=players
        self.players=[]
        self.player_create()
        self.deck=Deck()
        
    # def Ask(self,player,ask):
    #     temp=[]
    #     for card in player.hand:
    #         if card.value == ask:
    #             del card.value
    #             temp.append(card)
    #         if len(temp)!=0:
    #             player.hand.append(temp)
    def player_create(self):
        for i in range(1,self.playersNum+1):
            self.players.append(Player(i))
        print self.players
        return self
    def first_turn(self):
        x=randint(0,self.playersNum)
        vall=self.players[x].play()

                
        return self

class Card(object):
    def __init__(self,value,suit):
        self.suit=suit
        self.value=value
    def __repr__(self):
        return "<Card val {} suit {}>".format(self.value, self.suit)

class Deck(object):
    def __init__(self):
        self.size=52
        self.cards=[]
        self.suits=["hearts","clubs","dimonds","spades"]
        self.build()
    def build(self):
        cards_in_suit=(self.size/len(self.suits))
        for x in range(0,len(self.suits)):
            for i in range(1,cards_in_suit+1):
                self.cards.append(Card(i,self.suits[x]))
        
            
        return self
    # def shuffle(self):
    #     for  in self.cards

test=Game(4)

Deck().build()
test.first_turn()
