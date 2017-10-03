using System;
using System.Collections.Generic;

namespace Boxing_Unboxing
{
    class Program
    {
        static void Main(string[] args)
        {
            List<object> box = new List<object>();
            box.Add(7);
            box.Add(28);
            box.Add(-1);
            box.Add(true);
            box.Add("chair");
            int sum=0;
            foreach(object each in box){
                if (each is int){
                    sum+=(int)each;
                    Console.WriteLine((int)each);
                }
                if (each is bool){
                    Console.WriteLine((bool)each);
                }
                if (each is string){
                    Console.WriteLine(each as string);
                }

            }

            Console.WriteLine(sum);
        }
    }
}
