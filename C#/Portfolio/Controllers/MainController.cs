using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
 
namespace Main.Controllers
{
    public class MainController : Controller
    {
        // [HttpGetAttribute]
        // public string Index()
        // {
        //     return "Hello World!";
        // }
        [HttpGet]
        [Route("")]
        public IActionResult Home()
        {
            return View();
        
        }
        [HttpGet]
        [Route("Contact")]
        public IActionResult Contact()
        {
            return View();
        
        }
        [HttpGet]
        [Route("Projects")]
        public IActionResult Projects()
        {
            return View();
        
        }
    }
}
