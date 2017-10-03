using System;

namespace WizardNinjaSamurai
{
    public class Ninja: Human
    {
        Random rand = new Random();
        public Ninja(string name):base(name)
        {
            dexterity = 175;
            health=50;

        }
        public void steal(Human target){
            target.health-=10;
            health+=10;
        }
        public void get_away(){
            health-=15;
            
        }

    }
}