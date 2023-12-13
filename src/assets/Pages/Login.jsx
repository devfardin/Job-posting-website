import React, { useContext, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { PiEyeSlash, PiEye } from 'react-icons/pi';
import { FcGoogle } from 'react-icons/fc';
import { contextProvider } from '../Components/AppContext';
import { GoogleAuthProvider } from 'firebase/auth';
import swal from 'sweetalert';
import { Helmet } from "react-helmet-async"
import SocialLogin from '../Components/LoginWithSocial/SocialLogin';


const Login = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const {handelGoogle, userSignIn}=useContext(contextProvider)
    const [showPassword, setShowPassword] = useState(false)
     const googleProvider = new GoogleAuthProvider

    const loginHandel=(e)=>{
        e.preventDefault()
        const form=e.target
        const email=form.email.value;
        const password= form.password.value;

        userSignIn(email, password)
        .then(() => {
            swal("Welcome", "Login successful.", "success");
            navigate(location?.state ? location.state : '/')
            return
        })
        .catch((error) => {
            swal("Login failed", "Please check your credentials. Email doesn't match", "error");
            console.log(error);
            return
        })
    }

    const haldelGoogle = () => {
        handelGoogle(googleProvider)
            .then(() => {
                swal("success", "Account successfully created. You can now log in.", "success");
                navigate(location?.state ? location.state : '/')
                return
            })
            .catch(() => {
                swal("Account creation failed", " Please check your information and try again.", "error");
                return
            })
    }
    return (
        <div className='bg-sectionbg py-14'>
             <Helmet>
                <title>Upwork | Login </title>
            </Helmet>
            <div className='container md:w-10/12/ lg:w-2/4 mx-auto px-4'>
                <div className='bg-white px-6 py-10 rounded-lg'>
                    <h1 className='text-2xl font-medium text-black1 mb-5'>Login to your account</h1>
                    <form onSubmit={loginHandel}>
                        <label className='text-lg font-normal text-black1 mb-1 ml-1 mt-5 block'>Email</label>
                        <input className='text-base placeholder:text-textColor bg-sectionbg rounded-lg border duration-300 focus:bg-white focus:shadow-sm focus:border focus:border-primery outline-none py-4 px-5 w-full' placeholder='Email' name='email' type='email' />

                        <label className='text-lg font-normal text-black1 mb-1 ml-1 mt-4 block'>Password</label>
                        <div className='h-16 relative'>
                            <input className='text-base placeholder:text-textColor bg-sectionbg rounded-lg border duration-300 focus:bg-white focus:shadow-sm focus:border focus:border-primery outline-none py-4 px-5 w-full' placeholder='Password' name='password' type={showPassword ? 'text' : 'password'} />

                            <span className='absolute top-4 right-5 text-2xl' onClick={() => setShowPassword(!showPassword)}>
                                {
                                    showPassword ? <PiEye> </PiEye> : <PiEyeSlash> </PiEyeSlash>
                                }
                            </span>
                        </div>
                        <Link to='/forgote-password' className='text-base hover:underline hover:text-primery ml-2 font-normal text-black1 my-2 inline-block'>Forgotten password?</Link>
                        <input type="submit" value="Login" className='text-lg px-10 py-[14px] bg-primery hover:bg-hover rounded-lg text-white mt-5 w-full inline-block duration-300' />
                        <h1 className='text-center text-lg font-normal text-black1  my-3'> Don't you have an account?
                            <Link to='/Register' className='text-lg hover:underline hover:text-hover duration-300 ml-2 font-normal text-primery inline-block'>Register</Link>
                        </h1>
                    </form>
                    <div className='p-x-10'>
                        <div class="relative flex  items-center  my-6 ">
                            <div class="flex-grow border-t border"></div>
                            <span class="flex-shrink mx-4 text-black1 text-xl font-normal">OR</span>
                            <div class="flex-grow border-t border"></div>
                        </div>

                       <SocialLogin/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login