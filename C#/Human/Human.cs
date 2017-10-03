using System;

namespace Human
{
    class Human
    {
        public string name {get;set;}
        public int strength {get;set;}
        public int intelligence {get;set;}
        public int dexterity {get;set;}
        public int health {get;set;}

        public Human(
            string name = "John Doe", 
            int strength = 3, 
            int intelligence = 3, 
            int dexterity = 3, 
            int health = 100
            ) {
                this.name = name;
                this.strength = strength;
                this.intelligence = intelligence;
                this.dexterity = dexterity;
                this.health = health;
        }

        public void attack(Human target) {
            target.health = target.health - (strength * 5);
        }

        public void valAttack(Human target) {
            if(target is Human) {
                attack(target);
            }
        }

    }
}