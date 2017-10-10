using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
namespace YourNamespace.Controllers
{
    public class PasscodeController : Controller
    {
        
        public static char GetLetter(Random rand)
            {
                string chars = "abcdefghijklmnopqrstuvwxyz1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  
                int num = rand.Next(0, chars.Length -1);
                return chars[num];
            }

        [HttpGet]
        [Route("")]
        public IActionResult Index()
        {   
        HttpContext.Session.SetInt32("Count",0);


            return View();
            
        }
        [HttpPost]
        [Route("generate")]
        public IActionResult Generate()
        {   int? count = HttpContext.Session.GetInt32("Count");
            count++;
            ViewBag.Count= count;
            HttpContext.Session.SetInt32("Count",(int)count);
            string passcode = "";
             Random rand = new Random();
            for(int i=0;i<14;i++){
               
            passcode= passcode + GetLetter(rand);
            }
            ViewBag.Passcode=passcode;
            
            return View("Index");
            
        }
    }
}
