using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace MyApiProject.Controllers
{
    [ApiController]
    [Route("api/users")]
    public class UsersController : ControllerBase
    {
        private static List<User> users = new List<User>
        {
            new User { Id = 1, Name = "John Doe", Company = "Company A", Age = 30, Registered = "2020-03-15", IsActive = true },
            new User { Id = 2, Name = "Jane Smith", Company = "Company B", Age = 25, Registered = "2019-05-20", IsActive = false },
            new User { Id = 3, Name = "Peter Johnson", Company = "Company C", Age = 40, Registered = "2021-12-10", IsActive = true }
        };

        // Rota para retornar os dados (GET /api/dados)
        [HttpGet("dados")]
        public ActionResult<IEnumerable<User>> GetUsers()
        {
            return users;
        }

        // Rota para adicionar novos dados (POST /api/mypost)
        [HttpPost("mypost")]
        public ActionResult<User> AddUser(User newUser)
        {
            newUser.Id = users.Count + 1;
            users.Add(newUser);
            return newUser;
        }
    }

    public class User
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Company { get; set; }
        public int Age { get; set; }
        public string Registered { get; set; }
        public bool IsActive { get; set; }
    }
}
