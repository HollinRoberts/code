using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using DbConnection;

namespace QuotingDojo.Controllers
{
    public class HomeController : Controller
    {
        // GET: /Home/
        [HttpGet]
        [Route("")]
        public IActionResult Index()
        {
            List<Dictionary<string, object>> AllQuotes = DbConnector.Query("SELECT * FROM quotes");
            Console.WriteLine(AllQuotes);
            return View();
        }
        
        [HttpPost]
        [Route("add")]
        public IActionResult add(string name,string quote)
        {  
            object NewQuote= new {
            Name=name,
            Quote=quote,
            };
            string QueryString = "INSERT INTO quotes (name,quote) VALUES(\""+name+"\",\""+quote+"\")";
            DbConnector.Query(QueryString);
            return View("index");
        }
        [HttpPost]
        [Route("skip")]
        public IActionResult skip()
        {  
            List<Dictionary<string, object>> AllQuotes = DbConnector.Query("SELECT * FROM quotes");
            ViewBag.Quotes=AllQuotes;
            Console.WriteLine(AllQuotes);
            return View("quotes");
        }
    }
}
