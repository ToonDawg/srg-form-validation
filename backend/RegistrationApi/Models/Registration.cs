using System.ComponentModel.DataAnnotations;

namespace RegistrationApi.Models
{
    public record Registration(
        [Required] string FirstName,
        [Required] string LastName,
        [Required][DataType(DataType.Date)] DateTime DateOfBirth,
        [Required] string Address,
        [Required] string State);

}
