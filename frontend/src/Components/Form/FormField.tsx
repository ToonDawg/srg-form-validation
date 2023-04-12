import { ErrorMessage, Field, FormikErrors, FormikTouched } from "formik";

export interface FormValues {
    firstName: string;
    lastName: string;
    dateOfBirth: Date;
    address: string;
    state: 'NSW' | 'QLD' | 'VIC' | 'ACT' | 'TAS' | 'NT' | 'SA' | 'WA'
}

interface FormFieldsProps {
    label: string;
    name: keyof FormValues;
    type?: string;
    errors: FormikErrors<FormValues>;
    touched: FormikTouched<FormValues>;
}


export function FormField({ label, name, errors, touched, type = 'text' }: FormFieldsProps) {
    return (
        <div style={{ margin: 10 }}>
            <label style={{ margin: 10 }} htmlFor={name}>{label}</label>

            <Field
                id={name as string}
                name={name as string}
                type={type}
                className={errors[name] && touched[name] ? 'error' : ''}
            />
            <ErrorMessage
                name={name as string}
                component="div"
                className="error-message"
            />


        </div>
    );
}