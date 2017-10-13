using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using LoginRegistration.Models;
using DbConnection;
using Microsoft.AspNetCore.Http;


namespace LoginRegistration.Controllers
{
    public class HomeController : Controller
    {
        // GET: /Home/
        [HttpGet]
        [Route("")]
        public IActionResult Index()
        {   
            List<Object> error = new List<object>();
            ViewBag.errors= error;
            return View();
        }
        [HttpPost]
        [Route("Submit")]
    
        public IActionResult Submit(User NewUser)
        {
            if (TryValidateModel(NewUser))
            {
                        string QueryString = "INSERT INTO users (first,last,email,password,createdAt) VALUES(\""+NewUser.FirstName+"\",\""+NewUser.LastName+"\",\""+NewUser.Email+"\",\""+NewUser.Password+"\",NOW())";
                        DbConnector.Query(QueryString);
                        List<Dictionary<string, object>> User = DbConnector.Query("SELECT email,password,id,first FROM users WHERE email = \""+NewUser.Email+"\"");
                        HttpContext.Session.SetInt32("userId", (int)User[0]["id"]);
                        HttpContext.Session.SetString("name", (string)User[0]["first"]);
                        return Redirect("quote");    
            }
            else
            {
                ViewBag.errors = ModelState.Values;
                return View("Index");
            }
           
        }

        [HttpPost]
        [Route("Login")]
        public IActionResult Login(Login userLogin )
        {   
            if (TryValidateModel(userLogin))
            {  
            List<Dictionary<string, object>> User = DbConnector.Query("SELECT email,password,id,first FROM users WHERE email = \""+userLogin.Email+"\"");
                
                if(User.Count>0){
                     if((string)User[0]["email"]==userLogin.Email && (string)User[0]["password"]==userLogin.Password){
                            HttpContext.Session.SetInt32("userId", (int)User[0]["id"]);
                            HttpContext.Session.SetString("name", (string)User[0]["first"]);
                            return Redirect("quote");
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
        [HttpPost]
        [Route("add")]
        public IActionResult add(string name,string quote)
        {  
            string user1=HttpContext.Session.GetString("name");
            int? userId=HttpContext.Session.GetInt32("userId");
            string QueryString = "INSERT INTO quotes (name,quote,userId,createdAt) VALUES(\""+user1+"\",\""+quote+"\",\""+userId+"\",NOW())";
            DbConnector.Query(QueryString);
            return Redirect("quote");
        }

        [HttpPost]
        [Route("comment")]
        public IActionResult comment(string id,string comment)
        {  
            int? userId=HttpContext.Session.GetInt32("userId");
            string QueryString = "INSERT INTO comments (comments,msguserId,msgcreatedAt,msgId) VALUES(\""+comment+"\",\""+userId+"\",NOW(),\""+id+"\")";
            DbConnector.Query(QueryString);
            return Redirect("quote");
        }

        [HttpPost]
        [Route("delete")]
        public IActionResult delete(string id)
        {
            string QueryString = "DELETE FROM quotes WHERE idquotes = \""+id+"\"";
            DbConnector.Query(QueryString);
            return Redirect("quote");
        }

        [HttpGet]
        [Route("quote")]
        public IActionResult quote()
        {  
            string user1=HttpContext.Session.GetString("name");
            List<Dictionary<string, object>> AllQuotes = DbConnector.Query("SELECT * FROM quotes");
            ViewBag.Quotes=AllQuotes;
            Console.WriteLine(AllQuotes);
            List<Dictionary<string, object>> Comments = DbConnector.Query("SELECT * FROM quotes JOIN comments on quotes.idquotes = comments.msgId");
            ViewBag.Comments=Comments;
            ViewBag.name=user1;
            return View("quote");
        }
    }
}
 