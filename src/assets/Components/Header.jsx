import React, { useContext, useState } from 'react';
// import Logo from '../../../public/images/logo.png'
import { Link, NavLink } from "react-router-dom";
import { FiLogOut, FiLogIn } from 'react-icons/fi';
import { contextProvider } from './AppContext';
// import swal from 'sweetalert';



const Header = () => {
    const { user, userLogOut } = useContext(contextProvider)

    const signOut = () => {
        userLogOut()
            .then(() => {
                swal("success", "Account successfully created. You can now log in.", "success");
                return
            })
            .catch(error => {
                console.log(error)
            })
    }

    const navLink = <>
        <NavLink to="/" className={({ isActive, isPending }) =>
            isPending ? "!text-primery text-lg font-normal" : isActive ? "!text-primery text-lg font-normal" : "text-black lg:text-whiteC text-lg font-normal hover:text-primery"}>  Home  </NavLink>
        <NavLink to="/submit-job" className={({ isActive, isPending }) =>
            isPending ? "!text-primery text-lg font-normal" : isActive ? "!text-primery text-lg font-normal" : "text-black lg:text-whiteC text-lg font-normal hover:text-primery"}> Add Jobs</NavLink>
        <NavLink to="/find-jobs" className={({ isActive, isPending }) =>
            isPending ? "!text-primery text-lg font-normal" : isActive ? "!text-primery text-lg font-normal" : "text-black lg:text-whiteC text-lg font-normal hover:text-primery"}> Find Jobs </NavLink>
        <NavLink to="/My-posted-jobs" className={({ isActive, isPending }) =>
            isPending ? "!text-primery text-lg font-normal" : isActive ? "!text-primery text-lg font-normal" : "text-black lg:text-whiteC text-lg font-normal hover:text-primery"}> My Posted Jobs</NavLink>
        <NavLink to="/My-Bids" className={({ isActive, isPending }) =>
            isPending ? "!text-primery text-lg font-normal" : isActive ? "!text-primery text-lg font-normal" : "text-black lg:text-whiteC text-lg font-normal hover:text-primery"}>My Bids</NavLink>
        <NavLink to="/Bid-Requests" className={({ isActive, isPending }) =>
            isPending ? "!text-primery text-lg font-normal" : isActive ? "!text-primery text-lg font-normal" : "text-black lg:text-whiteC hover:text-primery text-lg font-normal dark:text-black"}>Bid Requests</NavLink>
    </>

    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <section className="bg-sectionbg z-0">
            <nav className=" container px-4 py-6 mx-auto lg:flex lg:justify-between lg:items-center">

                <div className="flex items-center justify-between">
                    <Link to="/" className='z-10'>
                        {/* <img className=" " src="https://i.ibb.co/fXFJCJG/logo.png" alt="Our conpany logo" /> */}
                        <img className="w-32 h-auto" src="https://i.ibb.co/1QbwhDh/Upworklogo.jpg" alt="Our conpany logo" />
                    </Link>

                    {/* Mobile menu button */}
                    <div className="flex lg:hidden">
                        <button
                            onClick={toggleMenu}
                            type="button"
                            className="text-black focus:outline-none focus:text-black "
                            aria-label="toggle menu"
                        >
                            {!isOpen ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu open: "block", Menu closed: "hidden" */}
                <div
                    className={`${isOpen ? 'block' : 'hidden'
                        } absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white shadow-md lg:bg-transparent lg:dark:bg-transparent lg:shadow-none dark:bg-gray-900 lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex mt-6 lg:items-center !text-black`}
                >
                    <div className="flex lg:items-center  gap-x-6 flex-col space-y-4 lg:mt-0 lg:flex-row lg:space-y-0 !text-black">

                        {navLink}

                        <div className='flex lg:items-center flex-col lg:flex-row justify-start  gap-x-16 lg:ml-10'>

                            <div className='flex gap-3 items-center'>
                                {
                                    user?.photoURL && <img className='w-11 h-11 rounded-full' src={user?.photoURL} alt="Profile image" />
                                }

                                <h1 className='text-black md:text-black text-lg font-normal hover:text-hover duration-300 cursor-pointer hover:underline'>{user?.displayName} </h1>
                            </div>

                            {
                                user ? <div>
                                    <button onClick={signOut} className=' py-3 px-7 rounded-full bg-primery lg:text-white text-base font-normla hover:bg-hover duration-300 flex gap-x-1 items-center'>  Log Out <FiLogOut className='text-xl'> </FiLogOut> </button>
                                </div>
                                    :
                                    <div>
                                        <NavLink to="/login" className=' py-3 px-7 rounded-full bg-primery hover:bg-hover duration-300 text-white text-base font-normal flex gap-x-1 items-center'>  Login <FiLogIn className='text-xl'> </FiLogIn>  </NavLink>
                                    </div>

                            }
                        </div>


                    </div>
                </div>
            </nav>

        </section>

    );
};

export default Header;
