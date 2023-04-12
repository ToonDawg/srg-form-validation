namespace RegistrationApi.Models
{
    public record Registration(
        string FirstName, 
        string LastName, 
        DateTime DateOfBirth, 
        string Address, 
        string State);

}
