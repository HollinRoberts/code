using System;
using System.ComponentModel.DataAnnotations.Schema;
using System.Collections.Generic;
using BankAcounts.Models;

namespace BankAcounts.Models
{
    public class User
    {
        public int userid {get;set;}
        public string first {get;set;}  
      
        public string last {get;set;}
    
        public string email {get;set;}
      
        public string password {get;set;}

        public int ballance {get;set;}
      [DatabaseGenerated(DatabaseGeneratedOption.Computed)]
        public DateTime createdAt {get;set;}

        public int activityid {get;set;}

        public List<Activity> activity {get;set;}

        public User()
        {
            activity = new List<Activity>();
        }
    }
}