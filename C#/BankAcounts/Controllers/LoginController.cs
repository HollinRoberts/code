using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using BankAcounts.Models;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Http;


namespace BankAcounts.Controllers
{
    public class LoginController : Controller
    {
        // GET: /Home/
         private BankContext _context;
 
        public LoginController(BankContext context)
        {
            _context = context;
        }

        [HttpGet]
        [Route("")]
        public IActionResult Index()
        {   
            DateTime now = DateTime.Now;
            Console.WriteLine(now);
            List<Object> error = new List<object>();
            ViewBag.errors= error;
            return View("login");
        }
        [HttpPost]
        [Route("Submit")]
    
        public IActionResult Submit(regvalidate NewUser)
        {
            if (TryValidateModel(NewUser))
            {   DateTime now = DateTime.Now;

                    User New= new User
                    {
                        first = NewUser.FirstName,
                        last = NewUser.LastName,
                        email = NewUser.Email,
                        password = NewUser.Password,
                        createdAt = DateTime.Now,
                        ballance = 0,
                    };
                    _context.Add(New);
                    _context.SaveChanges();
                    //add session of user
                   return View("Account");
                }
            
            else
            {
                Console.WriteLine("in else");
             
                ViewBag.errors = ModelState.Values;
            
                Console.WriteLine(ViewBag.errors);
                return View("login");
            }
           
        }
        [HttpPost]
        [Route("Login")]
        public IActionResult Login(Login userLogin )
        {   
            if (TryValidateModel(userLogin))
            {
             User User1 = _context.users.Include(users=>users.activity).SingleOrDefault(user=>user.email==userLogin.Email);
                
                if(User1!=null){
                     if(User1.email==userLogin.Email && User1.password==userLogin.Password){
                        HttpContext.Session.SetInt32("userId", User1.userid);
                        HttpContext.Session.SetString("name", User1.first);
                        ViewBag.Name=User1.first;
                        ViewBag.Ballance=User1.ballance;
                        ViewBag.Transactions=User1.activity;
                         return View("account");
                     }else{
                        ModelState.AddModelError("LogFail", "Invalid Login");
                        ViewBag.errors = ModelState.Values;
                        Console.WriteLine(ViewBag.errors);
                         return View("login");
                     }
                }else{
                    ModelState.AddModelError("LogFail", "Invalid Login");
                    ViewBag.errors = ModelState.Values;
                    return View("login");
                }
            }
             else
            {
                Console.WriteLine("in else");
             
                ViewBag.errors = ModelState.Values;
            
                Console.WriteLine(ViewBag.errors);
                return View("login");
            }
        }
        [HttpPost]
        [Route("action")]
        public IActionResult update(int value)
        {   
           
        int? id = HttpContext.Session.GetInt32("userId");
        User Account = _context.users.Include(users=>users.activity).SingleOrDefault(user=>user.userid==(int)id);

        Activity action= new Activity
                    {
                        userid = (int)id,
                        change = value,
                        
                    };
                    _context.Add(action);
                    _context.SaveChanges();
               Account.ballance=Account.ballance+value;
               _context.SaveChanges();
                ViewBag.Name=Account.first;
                ViewBag.Ballance=Account.ballance;
        ViewBag.Transactions=Account.activity;
                return View("account");
            
        }

    }
}
 