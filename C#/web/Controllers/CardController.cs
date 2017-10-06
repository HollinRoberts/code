using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
 
namespace web.Controllers
{
    public class CardController : Controller
    {
        [HttpGetAttribute]
        public string Index()
        {
            return "Hello World!";
        }
        [HttpGet]
        [Route("Card/{First}/{Last}/{Age}/{Color}")]
        public JsonResult Card(string First,string Last,int Age,string Color)
        {
            object user= new{
                First_Name=First,
                Last_Name=Last,
                Age=Age,
                Favorite_Color=Color,
                };

            return Json(user);
        }
        [HttpGet]
        [Route("")]
        public string Home()
        {
            return "Hello World!";
        }
    }

}
