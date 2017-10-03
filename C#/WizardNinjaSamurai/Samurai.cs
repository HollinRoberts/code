using System;

namespace WizardNinjaSamurai
{
    public class Samurai: Human
    {
        static int counter=0;
        Random rand = new Random();
        public Samurai(string name):base(name)
        {
            counter++;
            health=200;

        }
        public void death_blow(Human target){
            if(target.health<50){
                target.health=0;
            }
        }
        public void meditate(){
            health=200;
            
        }
        public void how_many(){
            Console.WriteLine(counter);
        }
    }
}