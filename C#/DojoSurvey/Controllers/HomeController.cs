using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace DojoSurvey.Controllers
{
    public class HomeController : Controller
    {
        // GET: /Home/
        [HttpGet]
        [Route("")]
        public IActionResult Index()
        {
            return View();
        }
        [HttpPost]
        [Route("method")]
        public IActionResult Method(string name, string location, string language, string text)
        {
            ViewBag.name = name;
            ViewBag.location=location;
            ViewBag.language=language;
            ViewBag.comment=text;

            
            return View();
        }
    }
}
