using System;
using System.Collections.Generic;


namespace DeckofCards
{
    public class Deck
    {   
       
        public Deck(){
            reset();
        }
        
        public List<Card> cards = new List<Card>();
        public int size=52;
        
        public string[] suits={"hearts","clubs","dimonds","spades"};
        public string[] stringVal={"Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"};
        public void reset(){
            int cards_in_suit=(size/suits.Length);
            for(int x =0; x<suits.Length;x++){
                
                for(int i=1;i<cards_in_suit+1;i++){
                    Card newCard= new Card(stringVal[i-1],suits[x],i);
                cards.Add(newCard);
                }
            }
        }
        public Card draw(){
            Card dealtCard=cards[0];
            cards.RemoveAt(0);
            return dealtCard;
        }

        Random rand = new Random();
        
        public void shuffle(){
            int n = cards.Count;
            while (n > 1) 
            {
                int k = rand.Next(n--);
                Card temp = cards[n];
                cards[n] = cards[k];
                cards[k] = temp;
            }
            
        }
    }
}
