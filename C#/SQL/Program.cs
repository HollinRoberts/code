using System;
using System.Collections.Generic;

namespace SQL
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");
        // using DbConnection;
            //Placed inside the code block where you want to query the database
            // List<Dictionary<string, object>> derp = DbConnector.Query("select* from users");
            // foreach (var item in derp)
            // {
            //     Console.WriteLine(item["FirstName"]);
            // }

            string FirstName = Console.ReadLine();
            string LastLast = Console.ReadLine();
            int Favorites = Int32.Parse(Console.ReadLine());
            string QueryString = "INSERT INTO users (FirstName,LastLast,Favorites) VALUES(\""+FirstName+"\",\""+LastLast+"\","+Favorites+")";
            DbConnector.Query(QueryString);
            Console.WriteLine("Enter Paramater");
            string Param = Console.ReadLine();
            Console.WriteLine("Enter the Value");
            string Input = Console.ReadLine();
            Console.WriteLine("Enter User Id");
            int IDinput = Int32.Parse(Console.ReadLine());
            QueryString = "UPDATE users SET "+Param+"=\""+Input+"\" WHERE id=\""+IDinput+"\"";
            DbConnector.Query(QueryString);

            Console.WriteLine("Enter User Id to Destroy!");
            IDinput = Int32.Parse(Console.ReadLine());
            QueryString = "DELETE FROM users WHERE id=\""+IDinput+"\"";
            DbConnector.Query(QueryString);
            
            List<Dictionary<string, object>> derp = DbConnector.Query("select* from users");
            foreach (var item in derp)
            {
                Console.WriteLine(item["FirstName"]);
                Console.WriteLine(item["LastLast"]);
                Console.WriteLine(item["id"]);
            }



            //or
            // DbConnector.Execute("Some query with no expected return");

        }

    }
}
