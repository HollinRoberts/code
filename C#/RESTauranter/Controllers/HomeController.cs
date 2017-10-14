using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using RESTauranter.Models;
using Microsoft.EntityFrameworkCore;
using System.Linq;

namespace RESTauranter.Controllers
{
    public class HomeController : Controller
    {
        private ReviewContext _context;
        public HomeController(ReviewContext context)
        {
            _context=context;
        }

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
        [Route("review")]
        public IActionResult review(Review newreview)
        {   
             if (TryValidateModel(newreview)){
            _context.Add(newreview);
            _context.SaveChanges();
             return Redirect("showreviews");
            }else{
                ViewBag.errors = ModelState.Values;
                return View("Index");
            }
        }
        [HttpGet]
        [Route("showreviews")]
        public IActionResult show()
        {   
            List<Review> allreviews = _context.reviews.OrderByDescending(x=>x.date).ToList();
            ViewBag.Reviews=allreviews;
            return View("review");
        }
    }
}
