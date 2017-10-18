using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Wedding.Models;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Http;

namespace Wedding.Controllers
{
    public class HomeController : Controller
    {
         private WeddingContext _context;
         public HomeController(WeddingContext context)
        {
            _context = context;
        }
    
        [HttpGet]
        [Route("home")]
        public IActionResult Main()
        {   int? id = HttpContext.Session.GetInt32("userId");
            if(id!=null){
            List<WeddingPlan> AllWeddings = _context.weddings.Include(guest=>guest.guestlist).ThenInclude(user=>user.User).ToList();
            ViewBag.AllWeddings=AllWeddings;
            ViewBag.User=(int)id;
            
        //   foreach(var wedding in AllWeddings){
        //     if(wedding.userid==(int)id)
        //     {
        //         ViewBag.Show=1;
        //     }else
        //     {
        //         for(var i =0;i<wedding.guestlist.Count;i++)
        //         {
        //             if(wedding.guestlist[i].userid!=(int)id){
        //                 ViewBag.Show=2;
        //                 ViewBag.Listid=wedding.guestlist[i].guestlistid;
        //                 }else
        //                 {
        //                     ViewBag.Show=3;
        //                 }
        //         }
        //     }
        //     }


            return View("index");
            }
            return RedirectToAction("Index","login");
        }
        [HttpGet]
        [Route("new")]
        public IActionResult New()
        {
            int? id = HttpContext.Session.GetInt32("userId");
            if(id!=null){
                return View("new");
            }
             return RedirectToAction("Index","login");
        }
        [HttpPost]
        [Route("Create")]
        public IActionResult create(WeddingValidate wedding)
        {
            int? id = HttpContext.Session.GetInt32("userId");
            if (TryValidateModel(wedding)){
                 WeddingPlan nw= new WeddingPlan
                    {
                        One = wedding.One,
                        Two = wedding.Two,
                        Date= wedding.Date,
                        Address= wedding.Address,
                        userid = (int)id,
                        
                    };
                    _context.Add(nw);
                    _context.SaveChanges();
                return View("wedding");
            }
            
            return View("wedding");
        }
        [HttpGet]
        [Route("details/{id}")]
        public IActionResult details(int id)
        {
            int? userid = HttpContext.Session.GetInt32("userId");
            if(userid!=null){
                WeddingPlan Details = _context.weddings.Include(guest=>guest.guestlist).ThenInclude(user=>user.User).SingleOrDefault(detail=>detail.weddingplanid==id);   
                ViewBag.Details=Details;
                // Other code
                return View("details");
                }
            return RedirectToAction("Index","login");
        }
        [HttpGet]
        [Route("delete/{id}")]
        public IActionResult delete(int id)
        {
            WeddingPlan toremove = _context.weddings.SingleOrDefault(detail=>detail.weddingplanid==id);   
            _context.weddings.Remove(toremove);
            _context.SaveChanges();
            // Other code
            return RedirectToAction("Main","home");
        }
        [HttpGet]
        [Route("RSVP/{id}")]
        public IActionResult rsvp(int id)
        {
            int? uid = HttpContext.Session.GetInt32("userId");
            Guestlist nw= new Guestlist
                    {
                        userid = (int)uid,
                        weddingplanid = id,
                        
                    };
                    _context.Add(nw);
                    _context.SaveChanges();
            // Other code
            return RedirectToAction("Main","home");
        }
        [HttpGet]
        [Route("UNRSVP/{id}")]
        public IActionResult unrsvp(int id)
        {
             Guestlist toremove = _context.guestlist.SingleOrDefault(detail=>detail.guestlistid==id);   
            _context.guestlist.Remove(toremove);
            _context.SaveChanges();
            // Other code
            return RedirectToAction("Main","home");
        }
        [HttpGet]
        [Route("logout")]
        public IActionResult logout(int id)
        {
            HttpContext.Session.Clear();
            // Other code
            return RedirectToAction("Index","login");
        }
    }   
}
