using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;

namespace dojodachi.Controllers
{  
    public class HomeController : Controller
    {
        void Feed(){
            int? meals = HttpContext.Session.GetInt32("Meals");
            meals-=1;
            HttpContext.Session.SetInt32("Meals",(int)meals);
            int? fullness = HttpContext.Session.GetInt32("Fullness");
            Random rand = new Random();
            fullness+=rand.Next(5,10);
            HttpContext.Session.SetInt32("Fullness",(int)fullness);
            
        }
         void Play(){
            Random rand = new Random();
            if(rand.Next(1,5)==1){
                int? energy = HttpContext.Session.GetInt32("Energy");
                energy-=5;
                HttpContext.Session.SetInt32("Energy",(int)energy);
                ViewBag.Result="You played with your dojodachi, he didn't like it. Energy -5";
            }else{
            int? energy = HttpContext.Session.GetInt32("Energy");
            energy-=5;
            HttpContext.Session.SetInt32("Energy",(int)energy);
            int? happiness = HttpContext.Session.GetInt32("Happiness");
          
            int gain=rand.Next(5,10);
            happiness+=gain;
            HttpContext.Session.SetInt32("Happiness",(int)happiness);
            ViewBag.Result="You played with your dojodachi happiness +"+gain+", Energy -5";}
            
        }
        void Work(){
            int? energy = HttpContext.Session.GetInt32("Energy");
            energy-=5;
            HttpContext.Session.SetInt32("Energy",(int)energy);
            int? meals = HttpContext.Session.GetInt32("Meals");
            Random rand = new Random();
            meals+=rand.Next(1,3);
            HttpContext.Session.SetInt32("Meals",(int)meals);
            
        }
        void Sleep(){
            int? fullness = HttpContext.Session.GetInt32("Fullness");
            fullness-=5;
            HttpContext.Session.SetInt32("Fullness",(int)fullness);
            int? happiness = HttpContext.Session.GetInt32("Happiness");
            happiness-=5;
            HttpContext.Session.SetInt32("Happiness",(int)happiness);

            int? energy = HttpContext.Session.GetInt32("Energy");
            energy+=15;
            HttpContext.Session.SetInt32("Energy",(int)energy);
            
        }
        void update(){
            int? fullness = HttpContext.Session.GetInt32("Fullness");
            int? happiness = HttpContext.Session.GetInt32("Happiness");
            int? meals = HttpContext.Session.GetInt32("Meals");
            int? energy = HttpContext.Session.GetInt32("Energy");
            ViewBag.Fullness = fullness;
            ViewBag.Happiness=happiness;
            ViewBag.Meals=meals;
            ViewBag.Energy=energy;
        }
        
        // GET: /Home/
        [HttpGet]
        [Route("")]
        public IActionResult Index()
        {   HttpContext.Session.SetInt32("Fullness",20);
            HttpContext.Session.SetInt32("Happiness",20);
            HttpContext.Session.SetInt32("Meals",3);
            HttpContext.Session.SetInt32("Energy",50);
            update();
            return View();
        }
        [HttpPost]
        [Route("feed")]
        public IActionResult feed()
        {  
            Feed();
            update();
            return View("index");
        }
        [HttpPost]
        [Route("play")]
        public IActionResult play()
        {   Play();
            update();
            return View("index");
        }
        [HttpPost]
        [Route("work")]
        public IActionResult work()
        {   Work();
            update();
            return View("index");
        }
        [HttpPost]
        [Route("sleep")]
        public IActionResult sleep()
        {   Sleep();
            update();
            return View("index");
        }
    }
}
