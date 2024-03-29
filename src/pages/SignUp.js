import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Loader from '../components/widgets/loader';
import AuthLeftSide from '../components/uis/auth/AuthLeftSide';
import RegisterFormField from '../components/uis/auth/RegisterFormField';
import { authService } from '../service/auth-service';

function SignUp() {
    let navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(null);

    const goto = () => {
        navigate('/dashboard');
    }

    const handleSignUp = async (event) => {
        event.preventDefault();

        const email = event.target.email.value;
        const password = event.target.password.value;
        const firstname = event.target.firstname.value;
        const lastname = event.target.lastname.value;
        const country = event.target.country.value;
        const state = event.target.state.value;
        const phoneNumber = event.target.phone.value;

        const userDataProps = {
            'fullName': firstname + ' ' + lastname,
            'country': country,
            'state': state,
            'phoneNumber': phoneNumber,
        };

        // const newData = JSON.stringify(userDataProps);

        setLoading(true);
        setSuccess(false);
        setError(null);

        const resVal = await authService.signup(email, password, userDataProps);
        console.log(resVal);
        if (resVal.isSuccess === true) {
            setLoading(false);
            goto();
        } else {
            setError(resVal.failed);
            setLoading(false);
        }
    }

    if (loading === true) return <Loader />
    return (
        <div className='w-screen h-screen flex flex-row overflow-hidden'>
            {/* left */}
                <AuthLeftSide />
            {/* left */}
            <div className='w-full px-11 py-10 h-screen flex flex-col justify-between overflow-auto'>
                    <RegisterFormField handleSignUp={handleSignUp} />
            </div>
        </div>
    );




    //                     {error && (
    //                         <div className='footer' style={{ color: 'red' }}>{error}</div>
    //                     )}
    //                     <br />
    //                     <div className="footer">
    //                         {loading ? (
    //                             // Displaying spinner while the process is ongoing
    //                             <Loader loading={false} />
    //                         ) : success ? (
    //                             // Displaying success message if the process is successful
    //                             <Loader loading={true} />
    //                         ) : (
    //                             // Displaying the button if not loading or successful
    //                             <button className="auth-action" type="submit">Register</button>
    //                         )}
}


export default SignUp;