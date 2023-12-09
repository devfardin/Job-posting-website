import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from "react-helmet-async"
const ForgotePass = () => {
    return (
        <div className='bg-sectionbg py-14'>
             <Helmet>
                <title>Upwork | Forgote Password</title>
            </Helmet>
            <div className='container md:w-10/12/ lg:w-2/4 mx-auto px-4'>
                <div className='bg-white px-6 py-10 rounded-lg'>
                    <h1 className='text-2xl font-medium text-black1 mb-5'>Reset Password Request</h1>
                    <form>
                        <label className='text-lg font-normal text-black1 mb-1 ml-1 mt-5 block'>Email</label>
                        <input className='text-base placeholder:text-textColor bg-sectionbg rounded-lg border duration-300 focus:bg-white focus:shadow-sm focus:border focus:border-primery outline-none py-4 px-5 w-full' placeholder='Email' name='email' type='email' />

                       
                        <input type="submit" value="Request" className='text-lg px-10 py-[14px] bg-primery hover:bg-hover rounded-lg text-white mt-5 w-full inline-block duration-300' />
                        <h1 className='text-center text-lg font-normal text-black1  my-3'> Don't you have an account?
                            <Link to='/Register' className='text-lg hover:underline hover:text-hover duration-300 ml-2 font-normal text-primery inline-block'>Register</Link>
                        </h1>
                    </form>
                  
                </div>
            </div>
        </div>
    )
}

export default ForgotePass