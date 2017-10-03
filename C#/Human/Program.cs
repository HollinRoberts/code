using System;

namespace Human
{
    class Program
    {
        static void Main(string[] args)
        {
            // Console.WriteLine("Hello World!");
            Master person1 = new Master("Ryu");
            Human person2 = new Human("Ken");

            Console.WriteLine(person1.name);
            person1.attack(person2);
            Console.WriteLine(person2.health);

            Student person3 = new Student("chun li");
            Console.WriteLine(person3.name);

            person1.haduken(person3);
            Console.WriteLine(person3.health);


        }
    }
}
