import { FacebookAuthProvider, GoogleAuthProvider } from 'firebase/auth'
import React, { useContext } from 'react'
import { contextProvider } from '../AppContext'
import { FcGoogle } from 'react-icons/fc'
import { FaFacebook } from "react-icons/fa";
import swal from 'sweetalert';

const SocialLogin = () => {
    const { handelGoogle, handleFacebook } = useContext(contextProvider)
    const googleProvider = new GoogleAuthProvider
    const FacebookProvider = new FacebookAuthProvider

    const haldelGoogle = () => {
        handelGoogle(googleProvider)
            .then(() => {
                swal("success", "Account successfully created. You can now log in.", "success");
                return
            })
            .catch((error) => {
                swal("Account creation failed", " Please check your information and try again.", "error");
                console.log(error);
                return
            })
    }

    const facebooklogin = () => {
        handleFacebook(FacebookProvider)
            .then((res) => {
                swal("success", "Account successfully created. You can now log in.", "success");
                console.log(res);
                return
            })
            .catch((error) => {
                swal("Account creation failed", " Please check your information and try again.", "error");
                console.log(error);
                return
            })
    }


    return (
        <div>
            <div onClick={haldelGoogle} className='border border-primery rounded-full cursor-pointer px-3 py-3 grid grid-cols-6 items-center'>
                <div className='justify-center items-center bg-none'>
                    <FcGoogle className='text-secondary text-4xl '></FcGoogle>
                </div>
                <h1 className='text-lg font-normal col-span-4 text-center text-gray1'> Continue with Google</h1>
            </div>
            <div className='mt-4'>
                <div onClick={facebooklogin} className='border border-primery rounded-full cursor-pointer px-3 py-3 grid grid-cols-6 items-center'>
                    <div className='justify-center items-center bg-none'>
                        <FaFacebook className='text-secondary text-4xl '></FaFacebook>
                    </div>
                    <h1 className='text-lg font-normal col-span-4 text-center text-gray1'> Continue with Facebook</h1>
                </div>
            </div>
        </div>
    )
}

export default SocialLogin