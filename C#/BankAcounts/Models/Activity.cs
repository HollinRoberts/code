using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace BankAcounts.Models
{
    public class Activity
    {
        public int activityid {get;set;}
      
        public int change {get;set;}
        [DatabaseGenerated(DatabaseGeneratedOption.Computed)]
        public DateTime createdAt {get;set;}

        public int userid {get;set;}

  

        
    }
}