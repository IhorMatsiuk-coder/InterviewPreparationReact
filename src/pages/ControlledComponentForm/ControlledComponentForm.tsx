import React, {SyntheticEvent, useState} from "react";
import * as Yup from 'yup';
import {ValidationError} from "yup";

const ControlledComponentForm = () => {
    const [formData, setFormData] = useState<Record<'firstName' | 'lastName' | 'email' | 'password', string>>({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
    });

    const [errors, setErrors] = useState<Record<string, string>>({});
    const [successMessage, setSuccessMessage] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);

    const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
        await validateField(name, value);
    };

    const schema = Yup.object().shape({
        firstName: Yup.string().required('First Name is required'),
        lastName: Yup.string().required('Last Name is required'),
        email: Yup.string().email('Invalid email').required('Email is required'),
        password: Yup.string().required('Password is required').min(6, 'Password must be at least 6 characters'),
    });

    const validateField = async (name: string, value: string) => {
        try {
            await schema.validateAt(name, { [name]: value });
            setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
        } catch (error: unknown) {
            if (error instanceof Error) {
                let message = error.message;
                setErrors((prevErrors) => ({ ...prevErrors, [name]: message }));
            }
        }
    };

    const handleSubmit = async (e: SyntheticEvent<HTMLFormElement, SubmitEvent>) => {
        e.preventDefault();
        setLoading(true);
        try {
            await schema.validate(formData, { abortEarly: false });
            // API call imitation
            setTimeout(() => {
                setLoading(false);
                setSuccessMessage('Registration successful!');
            }, 2000);
        } catch (error: unknown) {
            if (error instanceof ValidationError) {
                const validationErrors: Record<string, string> = {};
                error.inner.forEach((fieldError: ValidationError) => {
                    validationErrors[fieldError.path as string] = fieldError.message;
                });
                setErrors(validationErrors);
                setLoading(false);
            }
        }
    };

    return (
        <div>
            <h1>ControlledComponentForm</h1>
            <form style={{display: 'flex', flexDirection: "column", width: '500px', gap: 10}} onSubmit={handleSubmit}>
                <div>
                    <input style={{width: '100%', height: '30px'}} type="text" name="firstName" value={formData.firstName} onChange={handleChange}/>
                    {errors?.firstName && <span className="error-message">{errors.firstName}</span>}
                </div>
                <div>
                    <input style={{width: '100%', height: '30px'}} type="text" name="lastName" value={formData.lastName} onChange={handleChange}/>
                    {errors?.lastName && <span className="error-message">{errors.lastName}</span>}
                </div>
                <div>
                    <input style={{width: '100%', height: '30px'}} type="email" name="email" value={formData.email} onChange={handleChange}/>
                    {errors?.email && <span className="error-message">{errors.email}</span>}
                </div>
                <div>
                    <input style={{width: '100%', height: '30px'}} type="password" name="password" value={formData.password} onChange={handleChange}/>
                    {errors?.password && <span className="error-message">{errors.password}</span>}
                </div>
                <button style={{width:'100px', height: '30px'}} type="submit" disabled={loading}>{loading ? 'Submitting...' : 'Submit'}</button>
            </form>
            {successMessage && <div className="success-message">{successMessage}</div>}
        </div>
    )
}

export default ControlledComponentForm
