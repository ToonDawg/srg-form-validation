using Microsoft.AspNetCore.Mvc;
using RegistrationApi.Models;
using RegistrationApi.Services;

namespace RegistrationApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RegistrationController : ControllerBase
    {
        private readonly IRegistrationStorageService _csvService;

        public RegistrationController(IRegistrationStorageService csvService)
        {
            _csvService = csvService;
        }

        [HttpPost]
        public async Task<IActionResult> Post([FromBody] Registration registrationForm)
        {
            try
            {
                await _csvService.SaveRegistrationAsync(registrationForm);
                return Ok(new { success = true, message = "Form data saved successfully." });
            }
            catch (Exception ex)
            {
                return BadRequest(new { success = false, message = ex.Message });
            }
        }
    }
}
