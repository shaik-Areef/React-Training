import React, { useState, useEffect } from "react";
import './FormComponent.css';

const ContactUsForm = () => {
    // const [department, setDepartment] = useState("");
    // const [message, setMessage] = useState("");
    // const [agreedToTerms, setAgreedToTerms] = useState(false);

    const [formData, setFormData] = useState({
        department: '',
        message: '',
        agreedToTerms: false
    });

    const [departmentError, setDepartmentError] = useState(null);
    const [messageError, setMessageError] = useState(null);
    const [agreedToTermsError, setAgreedToTermsError] = useState(null);

    const [departmentTouched, setDepartmentTouched] = useState(false);
    const [messageTouched, setMessageTouched] = useState(false);
    const [agreedToTermsTouched, setAgreedToTermsTouched] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();

        const isValid = !departmentError && !messageError && !agreedToTermsError;
        if (!isValid) {
            return;
        }
        console.log("submitting", { formData });
    }

    useEffect(() => {
        validate();
    }, [formData]);

    const validate = () => {
        setDepartmentError(null);
        setMessageError(null);
        setAgreedToTermsError(null);
        if (formData.department === "") {
            setDepartmentError("Department is required.");
        }
        if (formData.message === "") {
            setMessageError("Message is required.");
        }
        if (formData.agreedToTerms === false) {
            setAgreedToTermsError("You must agree to the terms and conditions.");
        }
    }


    const stateToString = () => {
        return JSON.stringify(
            {
                values: { formData },
                errors: { departmentError, messageError, agreedToTermsError },
                touched: { departmentTouched, messageTouched, agreedToTermsTouched },
            },
            null,
            " "
        );
    }

    return (
        <form onSubmit={handleSubmit}>
            <select
                name="department"
                value={formData.department}
                onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                onBlur={(e) => setDepartmentTouched(true)}
            >
                <option value="">Select...</option>
                <option value="hr">Human Resources</option>
                <option value="pr">Public Relations</option>
                <option value="support">Support</option>
            </select>
            <br />
            {departmentError && departmentTouched && (
                <p className="alert">{departmentError}</p>
            )}
            <br />
            <textarea
                name="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                onBlur={(e) => setMessageTouched(true)}
                cols="30"
                rows="10"
            />
            <br />
            {messageError && messageTouched && (
                <p className="alert">{messageError}</p>
            )}
            <input
                type="checkbox"
                name="agreedToTerms"
                checked={formData.agreedToTerms}
                onChange={(e) => setFormData({ ...formData, agreedToTerms: e.target.checked })}
                onBlur={(e) => setAgreedToTermsTouched(true)}
            />
            I agree to the terms and conditions.
            <br />
            {agreedToTermsError && agreedToTermsTouched && (
                <p className="alert">{agreedToTermsError}</p>
            )}
            <button>Send</button>
            <pre>{stateToString()}</pre>
        </form>
    );
}
export default ContactUsForm