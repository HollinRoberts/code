using System;
using System.Collections.Generic;
using System.Linq;
using JsonData;

namespace ConsoleApplication
{
    public class Program
    {
        public static void Main(string[] args)
        {
            //Collections to work with
            List<Artist> Artists = JsonToFile<Artist>.ReadJson();
            List<Group> Groups = JsonToFile<Group>.ReadJson();

            //========================================================
            //Solve all of the prompts below using various LINQ queries
            //========================================================

            //There is only one artist in this collection from Mount Vernon, what is their name and age?
            List<Artist> Vernon = Artists.Where( artist => artist.Hometown=="Mount Vernon").ToList();
            Console.WriteLine(Vernon[0].ArtistName+" "+Vernon[0].Age);
            Console.WriteLine(Vernon.Count);

            //Who is the youngest artist in our collection of artists?
            int Age = Artists.Min(Artist => Artist.Age);
            Artist youngest = (Artist)Artists.Where(age => age.Age==Age).First();
              Console.WriteLine(youngest.ArtistName);
            //Display all artists with 'William' somewhere in their real name
            List<Artist> William = Artists.Where(name => name.RealName.Contains("William")).ToList();
            foreach (var artist in William){
                Console.WriteLine(artist.ArtistName);
            }
            //Display the 3 oldest artist from Atlanta
            List<Artist> OldBoys = Artists.Where(artist1 => artist1.Hometown=="Atlanta").OrderBy(artist => artist.Age).Reverse().Take(3).ToList();
            foreach (var item in OldBoys){
                Console.WriteLine(item.ArtistName);
            }

            //(Optional) Display the Group Name of all groups that have members that are not from New York City
            List<Group> NotNY = Groups.Join(Artists.Where(artist => artist.Hometown !="New York City"),
                                            group => group.Id,
                                            artist1 => artist1.GroupId,
                                            (group, artist1) =>
                                            {
                                                return group;
                                            }).Distinct().ToList();
            foreach (var item in NotNY){
                Console.WriteLine(item.GroupName);
            }
            //(Optional) Display the artist names of all members of the group 'Wu-Tang Clan'
             List<Artist> Wutang = Artists.Join(Groups.Where(group => group.GroupName =="Wu-Tang Clan"),
                                            artist => artist.GroupId,
                                            group => group.Id,
                                            (artist,group) =>
                                            {
                                                return artist;
                                            }).Distinct().ToList();
            foreach (var item in Wutang){
                Console.WriteLine(item.ArtistName);
            }
        }
    }
}
