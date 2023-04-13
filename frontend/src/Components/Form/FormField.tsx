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

    const isInvalid = touched[name] && errors[name];
    const isValid = touched[name] && !errors[name];
    const inputClass = isInvalid ? 'error' : isValid ? 'valid' : '';

    return (
        <div style={{ margin: 10 }}>
            <label style={{ margin: 10 }} htmlFor={name}>{label}</label>

            <Field
                id={name as string}
                name={name as string}
                type={type}
                className={inputClass}
            />
            <ErrorMessage
                name={name as string}
                component="div"
                className="error-message"
            />


        </div>
    );
}