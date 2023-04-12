# Technical Task Submission - Registration Form

Hey there! thanks for checking out my technical task submission. As asked, I built a registration form using React for the frontend and .NET WebApi for the backend. The application allows users to submit information and it includes security measures to protect against common web security threats such as end-to-end validation and https.

## Installation

To run the application, you will need Node.js and .NET Core installed on your system. Follow the steps below to get started:

1. Clone the repository to your local machine using git.
2. Navigate to the frontend directory and run `npm install` to install all the required dependencies.
3. Run `npm run dev` to start the react app.
4. Navigate to the backend directory and run `dotnet run` to start the .NET WebApi server.

## Usage

Once you have the application up and running, you can open your web browser and go to `http://localhost:3000` to view the registration form. The form is easy to use and error messages will be displayed if there are any issues. The data you submit will be saved to a local CSV file on the backend. (srg-form-validation\backend\RegistrationApi\bin\Debug\net7.0\FormData.csv)

## Security

To ensure that the form data is valid, I used Formik and Yup for form validation and axios for making API calls. The backend saves the form data to a local CSV file, and applies extra security measures for input validation. The backend api will also validate the data in the api call.

## Testing

This project uses the Jest testing framework along with the React Testing Library to write and run unit tests for the React components. These tests ensure that the components are working as expected, and help maintain the code quality as new features are added or existing features are updated.
