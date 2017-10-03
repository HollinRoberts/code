using System;

namespace Basic13
{
    class Program
    {
        public static void Print1to255()
        {
            for(int i=1;i<=255;i++){
                Console.WriteLine(i);
                
            }
            Console.WriteLine("end");
        }
        public static void Printoddbet1to255()
        {
            for(int i=1;i<=255;i=i+2){
                Console.WriteLine(i);
                
            }
            Console.WriteLine("end");
        }
        public static void PrintSum(){
            int sum=0;
            for(int i=0;i<=255;i++){
                Console.WriteLine(i);
                sum+=i;
                Console.WriteLine(sum);
            }
            Console.WriteLine("end");
        }
        public static void lterateArray(int[] Array1){
            for(int i=0;i<Array1.Length;i++){
                Console.WriteLine(Array1[i]);
            }
            Console.WriteLine("end");
        }
        public static void FindMax(int[] Array1){
            int max=Array1[0];
            for(int i=1;i<Array1.Length;i++){
                if(max<Array1[i]){
                    max=Array1[i];
                }
            }
            Console.WriteLine(max);
            Console.WriteLine("end");
        }
        public static void GetAvg(int[] Array){
            int sum=0;
            for(int i=0; i<Array.Length;i++){
                sum+=Array[i];
            }
            Console.WriteLine(sum/Array.Length);
        }
        public static int[] ArraywithOdd(){
            int length=(255+1)/2;
            int[] Array=new int[length];
            int x=0;
            for(int i=1;i<=255;i+=2){
                // for(int x=0; x<length;i++){
                //     if(Array[x]==0){
                //         Array[x]=i;
                //         // break;
                //     }
                Array[x]=i;
                Console.WriteLine(Array[x]);
                x++;
                
                }
                
                return Array;
        }
        public static int GreaterthanY(int[] Array,int y)
        {
            int countnum=0;
            foreach(int i in Array){
                if(i>y){
                    countnum++;
                }
            }
            return countnum;
        }
        public static int[] SquaretheVal(int[] Array)
        {
            for(int i=0; i<Array.Length;i++){
                Array[i]*=Array[i];
                Console.WriteLine(Array[i]);
            }
            return Array;
        }
        public static int[] EliminateNegNum(int[] Array)
        {
            for(int i=0; i<Array.Length;i++){
                if(Array[i]<0)
                {
                    Console.WriteLine(Array[i]);
                    Array[i]=0;
                    Console.WriteLine(Array[i]);
                }
                
            }
            return Array;
        }
        public static void MinMaxAvg(int[] Array)
        {
            int min=Array[0];
            int max=Array[0];
            double sum=Array[0];
            for(int i=1;i<Array.Length;i++){
                if(min>Array[i]){
                    min=Array[i];
                }
                if(max<Array[i]){
                    max=Array[i];
                }
                sum+=Array[i];
            }
            Console.WriteLine(min);
            Console.WriteLine(max);
            Console.WriteLine(sum/Array.Length);
            
            
        }
        
        public static int[] ShiftValinArray(int[] Array){
            for(int i=0;i<(Array.Length-1);i++){
                Console.WriteLine(Array[i]);
                Array[i]=Array[i+1];
                Console.WriteLine(Array[i]);
                Console.WriteLine(i);
            }
            Console.WriteLine(Array[Array.Length-1]);
            Array[Array.Length-1]=0;

            Console.WriteLine(Array[Array.Length-1]);
            return Array;
        }
        public static object[] NumtoString(object[] Array)
        {
            for(int i=0;i<Array.Length;i++)
            {
                int Val=(int)Array[i];
                if(Val<0)
                {
                    Console.WriteLine(Array[i]);
                    Array[i]="Dojo";
                    Console.WriteLine(Array[i]);
                }

            }
            return Array;
        }
        static void Main(string[] args)
        {
            // Print1to255();
            // Printoddbet1to255();
            // PrintSum();
            int[] Arraynew={-1,2,-3,4,5};
            // lterateArray(Arraynew);
            // FindMax(Arraynew);
            // GetAvg(Arraynew);
            // ArraywithOdd();
            // Console.WriteLine(GreaterthanY(Arraynew,2));
            // SquaretheVal(Arraynew);
            // EliminateNegNum(Arraynew);
            // MinMaxAvg(Arraynew);
            // ShiftValinArray(Arraynew);
            object[] Arrayobject={-1,2,-3,4,5};
            NumtoString(Arrayobject);
        }

    }
}
