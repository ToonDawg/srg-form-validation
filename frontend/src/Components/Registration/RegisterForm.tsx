import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from 'formik';
import { object, string, date } from 'yup';
import { FormField, FormValues } from '../Form/FormField';
import axios from 'axios';

const namePattern = /^[a-zA-Z\s'-]+$/;
const VALID_STATES = ['NSW', 'QLD', 'VIC', 'ACT', 'TAS', 'NT', 'SA', 'WA'];


function getMinDOB() {
    const currentDate = new Date();
    return new Date(currentDate.getFullYear() - 18, currentDate.getMonth(), currentDate.getDate());
}
const validationSchema = object({
    firstName: string()
        .required('First name is required and can only contain letters apostrophe, white spaces and hyphen')
        .matches(namePattern, 'First name is required and can only contain letters apostrophe, white spaces and hyphen'),
    lastName: string()
        .required('Last name is required and can only contain letters apostrophe, white spaces and hyphen ')
        .matches(namePattern, 'Last name is required and can only contain letters apostrophe, white spaces and hyphen '),
    dateOfBirth: date()
        .required('Date of birth is required and must be older than 18 years old ')
        .max(getMinDOB(), 'Date of birth is required and must be older than 18 years old '),
    state: string()
        .oneOf(VALID_STATES, 'State is required'),
    address: string()
        .required('Address is required'),

});

export const RegisterForm: React.FC = () => {

    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const initialValues: FormValues = {
        firstName: '',
        lastName: '',
        dateOfBirth: new Date(),
        state: 'NSW',
        address: ''
    };

    const onSubmit = async (values: FormValues, actions: FormikHelpers<FormValues>): Promise<void> => {
        try {
            const response = await axios.post('https://localhost:5001/api/registration', values);

            console.log('Form data saved successfully.', response.data);
            setSuccessMessage('Registration successful!');
            setErrorMessage('');
        } catch (error: any) {
            console.error('Error saving form data.', error);
            setSuccessMessage('');
            setErrorMessage('Registration failed. Please try again later.');
        }

        actions.setSubmitting(false);
    };

    return (
        <div>
            {successMessage && <div style={{ color: 'green' }}>{successMessage}</div>}
            {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
            <h2>Registration Form</h2>
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                {({ errors, touched }) => (
                    <Form>
                        <FormField label="First Name" name="firstName" errors={errors} touched={touched} />
                        <FormField label='Last Name' name='lastName' errors={errors} touched={touched} />
                        <FormField label="Date of Birth" name="dateOfBirth" type="date" errors={errors} touched={touched} />
                        <FormField label="Address" name="address" errors={errors} touched={touched} />
                        <div>
                            <label style={{ margin: 10 }} htmlFor="state">State</label>
                            <Field id="state" name="state" as="select" className={errors.state && touched.state ? 'error' : 'valid'}>
                                <option value="NSW">NSW</option>
                                <option value="QLD">QLD</option>
                                <option value="VIC">VIC</option>
                                <option value="ACT">ACT</option>
                                <option value="TAS">TAS</option>
                                <option value="NT">NT</option>
                                <option value="SA">SA</option>
                                <option value="WA">WA</option>
                            </Field>
                            <ErrorMessage name="state" component="div" className="error-message" />
                        </div>

                        <button style={{ margin: 10 }} type="submit">Submit</button>

                    </Form>
                )}
            </Formik>
        </div>
    );
};
