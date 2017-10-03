using System;

namespace WizardNinjaSamurai
{
    class Program
    {
        static void Main(string[] args)
        {
           
            Wizard merlin = new Wizard("merlin");
            merlin.fireball(merlin);
            Console.WriteLine(merlin.health);
            Samurai foo = new Samurai("Musashi");
            foo.how_many();
        }
    }
}
