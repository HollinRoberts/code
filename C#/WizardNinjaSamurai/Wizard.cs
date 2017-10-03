using System;

namespace WizardNinjaSamurai
{
    public class Wizard: Human
    {
        Random rand = new Random();
        public Wizard(string name):base(name)
        {
            intelligence = 25;
            health=50;

        }
        public void heal(){
            health+=10*intelligence;
        }
        public void fireball(Human target){
            target.health-=rand.Next(25,50);
            
        }

    }
}