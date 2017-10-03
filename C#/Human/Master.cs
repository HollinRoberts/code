using System;

namespace Human
{
    class Master : Human
    {
        public Master(string name = "Master John Doe"): base(name, 6, 6, 6, 200) {
                
        } 

        public void haduken(Human target) {
            target.health = target.health - (strength * 10);
        } 

    }
    
}