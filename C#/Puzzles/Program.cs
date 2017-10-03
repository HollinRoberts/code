using System;

namespace Puzzles
{
    class Program
    {    Random rand = new Random();
        public static void RandomArray(Random rand)
        {  
            int sum=0;
            int[] RandomArray= new int[10];
            for(int i=0;i<RandomArray.Length;i++){
                
                RandomArray[i]=rand.Next(5,26);
                Console.WriteLine(RandomArray[i]);
                sum+=RandomArray[i];
            }
            Console.WriteLine(sum);
        }

        public static int CoinFlip(Random rand)
        {
            Console.WriteLine("Tossing a Coin!");
            int result=rand.Next(1,3);
            if(result==1){
                  Console.WriteLine("Heads!");
            }
            else{
                  Console.WriteLine("Tails!");
            }
            return result;
        }

        public static double TossMultipleCoins(int num, Random rand){
            int heads=0;
            int tails=0;
            for(int i=num;i>0;i--){
                int value=CoinFlip(rand);
                if(value==1){
                    heads++;
                }
                else{
                    tails++;
                }
            }
            double result=(double)heads/num;
            return result;
        }

        public static int randIdx(string[] idx, Random rand){
           int result=rand.Next(0,idx.Length);
           return result;
        }

        public static void shuffle(string[] array1, Random rand){
            for(int i=0;i<array1.Length;i++){
                int idx=randIdx(array1,rand);
                int idx2=randIdx(array1,rand);
                if(idx==idx2){
                    while(idx==idx2){
                    idx2=randIdx(array1,rand);
                    }
                }
                string temp=array1[idx];
                array1[idx]=array1[idx2];
                array1[idx2]=temp;
            }
        }
        public static string[] greater(string[] array){
            int count=0;
            for(int i=0;i<array.Length;i++){
                if(array[i].Length>5){
                    count++;
                }
            }
            string[] Array2= new string[count];
            int idx=0;
            for(int i=0;i<array.Length;i++){
               
                if(array[i].Length>5){
                    Array2[idx]=array[i];
                    idx++;
                }
            }
        return Array2;
        }

        

        static void Main(string[] args)
        {   Random rand = new Random();
            string[] Array2={"Todd","Tiffany","Charlie","Geneva","Sydney"};
            shuffle(Array2,rand);
            RandomArray(rand);
            greater(Array2);
          
            Console.WriteLine(TossMultipleCoins(5,rand));
        }
    }
}
