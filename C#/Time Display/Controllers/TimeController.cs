using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
 
namespace Time_Display.Controllers
{
    public class TimeController : Controller
    {
        // [HttpGetAttribute]
        // public string Index()
        // {
        //     return "Hello World!";
        // }
        [HttpGet]
        [Route("")]
        public IActionResult Index()
        {
            return View();
            //OR
            // return View("Index");
            // //Both of these returns will render the same view (You only need one!)
        }
    }
}
