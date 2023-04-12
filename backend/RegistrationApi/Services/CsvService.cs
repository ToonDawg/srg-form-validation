using RegistrationApi.Models;
using System.Globalization;
using System.Text;

namespace RegistrationApi.Services
{
    public class CsvService : IRegistrationStorageService
    {
        public async Task SaveRegistrationAsync(Registration registrationForm)
        {
            var csvFilePath = Path.Combine(AppDomain.CurrentDomain.BaseDirectory, "FormData.csv");
            var csvSeparator = ",";
            bool fileExists = File.Exists(csvFilePath);

            using var streamWriter = new StreamWriter(csvFilePath, true, Encoding.UTF8);

            if (!fileExists)
            {
                var header = $"{nameof(Registration.FirstName)},{nameof(Registration.LastName)},{nameof(Registration.DateOfBirth)},{nameof(Registration.Address)},{nameof(Registration.State)}";
                await streamWriter.WriteLineAsync(header);
            }

            var line = string.Join(csvSeparator,
                registrationForm.FirstName,
                registrationForm.LastName,
                registrationForm.DateOfBirth.ToString("yyyy-MM-dd", CultureInfo.InvariantCulture),
                registrationForm.Address,
                registrationForm.State);

            await streamWriter.WriteLineAsync(line);
        }

    }
}
