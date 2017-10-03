using System;
using System.Collections.Generic;
using System.Linq;

namespace Collections_Practice
{
    class Program
    {
        int[] Array1= {0,1,2,3,4,5,6,7,8,9};
        string[] Array2={"Tim","Martin","Nikki","Sara"};
        bool[] Array3={true,false,true,false,true,false,true,false,true,false};

        int[,] Array4= new int[10,10];

        public static void table(int[,] array)
        {
            for(var i =1;i<11;i++){
                for(var x =1;x<11;x++){
                    array[i-1,x-1]=i*x;
                    Console.WriteLine(array[i-1,x-1]);
                }
            }
        }
       

        // public static void addNames(string[] array){
        //     foreach(string name in array){
        //         profile.add(name, null);
        //     }
        // }
        static void Main(string[] args)
        {    Random rand = new Random();
            string[] Array2={"Tim","Martin","Nikki","Sara"};
            int[,] Array4= new int[10,10];
            table(Array4);
            List<string> flavors = new List<string>();
            flavors.Add("Chocolate Chip");
            flavors.Add("Vanilla");
            flavors.Add("Chocolate");
            flavors.Add("Mint Chip");
            flavors.Add("Strawberry");

            Console.WriteLine(flavors[3]);
            Console.WriteLine(flavors.Count);
            flavors.RemoveAt(3);
            Console.WriteLine(flavors[3]);
            Console.WriteLine(flavors.Count);

          

            Dictionary<string,string> profile = new Dictionary<string,string>();
            foreach(string name in Array2){
                profile.Add(name, null);
            }
            // foreach(string name in Array2){
            //     profile[name]=flavors[rand.Next(0,flavors.Count)];
            // }
            foreach(KeyValuePair<string,string> name in profile.ToList()){
                profile[name.Key]=flavors[rand.Next(0,flavors.Count)];
            }
            foreach (var item in profile)
            {
             Console.WriteLine(item); 
            };
        }
        
    }
}
