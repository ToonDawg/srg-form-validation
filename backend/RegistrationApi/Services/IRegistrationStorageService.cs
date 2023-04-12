using RegistrationApi.Models;

namespace RegistrationApi.Services
{
    public interface IRegistrationStorageService
    {
        Task SaveRegistrationAsync(Registration registrationForm);

    }
}
