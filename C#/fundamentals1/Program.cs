﻿using System;

namespace fundamentals1
{
    class Program
    {
        static void Main(string[] args)
        {
            for(var i=1;i<=255;i++){
                Console.WriteLine(i);
            }

            for(var i=1;i<=100;i++){
                if(i%3==0 || i%5==0){
                    Console.WriteLine(i);
                }
            }
            for(var i=1;i<=100;i++){
                if(i%3==0 && i%5!=0){
                    Console.WriteLine("Fizz");
                }
                if(i%5==0 && i%3!=0){
                    Console.WriteLine("Buzz");
                }
                 if(i%5==0 && i%3==0){
                    Console.WriteLine("FizzBuzz");
                }
            }
            
        }
    }
}
