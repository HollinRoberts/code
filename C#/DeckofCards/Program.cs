using System;

namespace DeckofCards
{
    class Program
    {
        static void Main(string[] args)
        {
            Deck deck1= new Deck();
            Player hollin = new Player("Hollin");
            deck1.shuffle();
            Card card1=hollin.draw(deck1);
            Console.WriteLine(hollin.discard(0));
            if(hollin.discard(0)==null){
                Console.WriteLine("i got null");}
        
            // Card card2=deck1.draw();
            // Console.WriteLine(card2.val);
            // Card card3=deck1.draw();
            // Console.WriteLine(card3.val);
            // Card card4=deck1.draw();
            // Console.WriteLine(card4.val);
            // Console.WriteLine(deck1.cards.Count);
        }
    }
}
