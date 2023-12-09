import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { PiEyeSlash, PiEye } from 'react-icons/pi';
import { contextProvider } from '../Components/AppContext';
import swal from 'sweetalert';
import { GoogleAuthProvider } from 'firebase/auth';
import { FcGoogle } from 'react-icons/fc';
import { Helmet } from "react-helmet-async"

const Register = () => {
    const { handelGoogle, updateUser, createUser } = useContext(contextProvider)
    const [showPassword, setShowPassword] = useState(false)
    const [registrationError, setRegistrationError] = useState('')
    const googleProvider = new GoogleAuthProvider
    const validation = {
        'capital': /[A-Z]/,
        'spacelSymble': /[\W_]+/,
    };
    const registration = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const profile = form.profile.value;
        const email = form.email.value;
        const password = form.password.value

        setRegistrationError('')
        if (password.length < 6) {
            setRegistrationError('password must be at least 6 characters long.')
            return
        } else if (!validation.capital.test(password)) {
            setRegistrationError('At least one uppercase letter')
            return
        } else if (!validation.spacelSymble.test(password)) {
            setRegistrationError('At least one special character')
            return
        }
        createUser(email, password)
            .then((res) => {
                swal("success", "Account successfully created. You can now log in.", "success");
                console.log(res.user)
                updateUser({ name, profile })
                    .then(() => {
                       setTimeout(() => {
                        window.location.href = '/'
                       }, 1000);
                    })
                return
            })
            .catch((error) => {
                swal("Account creation failed", `Please check your information and try again.`, "error");
                return
            })
    }
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
    return (
        <div className='bg-sectionbg py-14'>
             <Helmet>
                <title>Upwork | Register </title>
            </Helmet>
            <div className='container md:w-10/12/ lg:w-2/4 mx-auto px-4'>
                <div className='bg-white px-6 py-10 rounded-lg'>
                    <h1 className='text-2xl font-medium text-black1 mb-5'>Create your account</h1>
                    <form onSubmit={registration}>
                        <label className='text-lg font-normal text-black1 mb-1 ml-1 mt-5 block'>Name</label>
                        <input className='text-base placeholder:text-textColor bg-sectionbg rounded-lg border duration-300 focus:bg-white focus:shadow-sm focus:border focus:border-primery outline-none py-4 px-5 w-full' placeholder='Name' name='name' type='text' />

                        <label className='text-lg font-normal text-black1 mb-1 ml-1 mt-5 block'>Email</label>
                        <input className='text-base placeholder:text-textColor bg-sectionbg rounded-lg border duration-300 focus:bg-white focus:shadow-sm focus:border focus:border-primery outline-none py-4 px-5 w-full' placeholder='Email' name='email' type='email' required />

                        <label className='text-lg font-normal text-black1 mb-1 ml-1 mt-5 block'>Photo Url</label>
                        <input className='text-base placeholder:text-textColor bg-sectionbg rounded-lg border duration-300 focus:bg-white focus:shadow-sm focus:border focus:border-primery outline-none py-4 px-5 w-full' placeholder='Profile Image' name='profile' type='text' />

                        <label className='text-lg font-normal text-black1 mb-1 ml-1 mt-4 block'>Password</label>

                        <div className='h-16 relative'>
                            <input className='text-base placeholder:text-textColor bg-sectionbg rounded-lg border duration-300 focus:bg-white focus:shadow-sm focus:border focus:border-primery outline-none py-4 px-5 w-full' placeholder='Password' name='password' type={showPassword ? 'text' : 'password'} required />
                            <span className='absolute top-4 right-5 text-2xl' onClick={() => setShowPassword(!showPassword)}>
                                {
                                    showPassword ? <PiEye> </PiEye> : <PiEyeSlash> </PiEyeSlash>
                                }
                            </span>
                        </div>
                        <div>
                            {
                                registrationError && <p className='text-lg text-red-400 font-normal'> {registrationError} </p>
                            }
                        </div>

                        <input type="submit" value="Register" className='text-lg px-10 py-[14px] bg-primery hover:bg-hover rounded-lg text-white mt-5 w-full inline-block duration-300' />
                        <h1 className='text-center text-lg font-normal text-black1  my-3'> Don't you have an account?
                            <Link to='/Login' className='text-lg hover:underline hover:text-hover duration-300 ml-2 font-normal text-primery inline-block'>Login</Link>
                        </h1>
                    </form>
                    <div className='p-x-10'>
                        <div class="relative flex  items-center  my-6 ">
                            <div class="flex-grow border-t border"></div>
                            <span class="flex-shrink mx-4 text-black1 text-xl font-normal">OR</span>
                            <div class="flex-grow border-t border"></div>
                        </div>

                        <div onClick={haldelGoogle} className='border border-primery rounded-full cursor-pointer px-3 py-3 grid grid-cols-6 items-center'>
                            <div className='justify-center items-center bg-none'>
                                <FcGoogle className='text-secondary text-4xl '></FcGoogle>
                            </div>
                            <h1 className='text-lg font-normal col-span-4 text-center text-gray1'> Continue with Google</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Register