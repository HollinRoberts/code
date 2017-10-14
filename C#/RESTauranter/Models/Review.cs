using System.ComponentModel.DataAnnotations;

namespace RESTauranter.Models
{
    public class Review
    {   
        public int reviewid {get;set;}
        [Required]
        public string name {get;set;}
        [Required]
        public string rname {get;set;}
        [Required]
        [MinLength(10)]
        public string review {get;set;}
        [Required]
        public string stars {get;set;}
        [Required]
        [DataType(DataType.DateTime)]
        [MyDate]
        public string date {get;set;}
       
    }
}