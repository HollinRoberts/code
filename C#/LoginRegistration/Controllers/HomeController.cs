using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using LoginRegistration.Models;
using DbConnection;

namespace LoginRegistration.Controllers
{
    public class HomeController : Controller
    {
        // GET: /Home/
         [HttpGet]
        [Route("")]
        public IActionResult Index()
        {   
            DateTime now = DateTime.Now;
            Console.WriteLine(now);
            List<Object> error = new List<object>();
            ViewBag.errors= error;
            return View();
        }
        [HttpPost]
        [Route("Submit")]
    
        public IActionResult Submit(User NewUser)
        {
            if (TryValidateModel(NewUser))
            {   DateTime now = DateTime.Now;
                 
                        string QueryString = "INSERT INTO users (first,last,email,password,createdAt) VALUES(\""+NewUser.FirstName+"\",\""+NewUser.LastName+"\",\""+NewUser.Email+"\",\""+NewUser.Password+"\",\""+now+"\")";
                        DbConnector.Query(QueryString);
                        return View("sucess");
                
                }
            
            else
            {
                Console.WriteLine("in else");
             
                ViewBag.errors = ModelState.Values;
            
                Console.WriteLine(ViewBag.errors);
                return View("Index");
            }
           
        }
        [HttpPost]
        [Route("Login")]
        public IActionResult Login(Login userLogin )
        {   
             if (TryValidateModel(userLogin))
            {  
            List<Dictionary<string, object>> User = DbConnector.Query("SELECT email,password FROM users WHERE email = \""+userLogin.Email+"\"");
                
                if(User.Count>0){
                     if((string)User[0]["email"]==userLogin.Email && (string)User[0]["password"]==userLogin.Password){
                         return View("sucess");
                     }else{
                        ModelState.AddModelError("LogFail", "Invalid Login");
                        ViewBag.errors = ModelState.Values;
                        Console.WriteLine(ViewBag.errors);
                         return View("index");
                     }
                }else{
                    ModelState.AddModelError("LogFail", "Invalid Login");
                    ViewBag.errors = ModelState.Values;
                    return View("index");
                }
            }
             else
            {
                Console.WriteLine("in else");
             
                ViewBag.errors = ModelState.Values;
            
                Console.WriteLine(ViewBag.errors);
                return View("Index");
            }
        }
    }
}
 