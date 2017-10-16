using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace BankAcounts.Controllers
{
    public class HomeController : Controller
    {
      
        [HttpGet]
        [Route("Account")]
        public IActionResult home()
        {
            return View("account");
        }
    }
}
