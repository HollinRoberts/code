using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using FormSubmission.Models;

namespace FormSubmission.Controllers
{
    public class UserController : Controller
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
    }
}
