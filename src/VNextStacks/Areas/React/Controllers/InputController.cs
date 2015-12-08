using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Mvc;
using Microsoft.AspNet.Mvc.Rendering;
using Microsoft.Data.Entity;
using VNextStacks.Models;

namespace VNextStacks.Controllers
{
    [Area("React")]
    public class InputController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }    
    }
}
