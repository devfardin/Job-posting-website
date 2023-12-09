import React from 'react'
import { Link } from 'react-router-dom';
import { FaFacebookF, FaLinkedinIn, FaGithub, FaTwitter } from 'react-icons/fa';
const Footer = () => {
  return (
    <footer className="bg-[#F3F3F3] pt-14">
      <div className="container p-6 mx-auto">
        <div className="lg:flex">
          <div className="w-full  lg:w-2/5">
            <div className="px-6">
              <img className='w-40 h-auto mt-4' src='https://i.ibb.co/1QbwhDh/Upworklogo.jpg' alt='Footer logo' />
              <p className="max-w-sm mt-3 text-black2 text-xl font-normal">
                Subscribe now to receive monthly news & personalised offers!
              </p>
              <button className='text-lg font-normal text-white py-3 px-10 bg-primeryk border border-primery hover:border-hover bg-hover hover:bg-transparent hover:text-primery duration-300 rounded-full mt-3 '>Subscribe</button>
              <div className="flex mt-6 gap-x-3">

                <div className='w-8 h-8 border border-primery rounded-full flex justify-center items-center bg-none'>
                  <FaFacebookF className='text-primery cursor-pointer text-lg '></FaFacebookF>
                </div>
                <div className='w-8 h-8 border border-primery  rounded-full flex justify-center items-center bg-none'>
                  <FaLinkedinIn className='text-primery cursor-pointer text-lg '></FaLinkedinIn>
                </div>
                <div className='w-8 h-8 border border-primery  rounded-full flex justify-center items-center bg-none'>
                  <FaTwitter className='text-primery  cursor-pointer text-lg '></FaTwitter>
                </div>
                <div className='w-8 h-8 border border-primery rounded-full flex justify-center items-center bg-none'>
                  <FaGithub className='text-primery cursor-pointer text-lg '></FaGithub>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6 lg:mt-0 lg:flex-1">

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <div>
                <h3 className="text-black1 font-medium text-xl">For Candidates</h3>
                <Link to='/' className="block mt-2 text-base text-gray1 font-normal hover:underline">
                  Browse Jobs
                </Link>
                <Link to='/about' className="block mt-2 text-base text-gray1 font-normal hover:underline">
                  Browse Candidates
                </Link>
                <Link to='' className="block mt-2 text-base text-gray1 font-normal hover:underline">
                  Candidate Dashboard
                </Link>

                <Link to='/contact' className="block mt-2 text-base text-gray1 font-normal hover:underline">
                  My Bookmarks
                </Link>
              </div>

              <div>
                <h3 className="text-black1 font-medium text-xl">For Employers </h3>
                <Link to='/' className="block mt-2 text-base text-gray1 font-normal hover:underline">
                  All Employers
                </Link>
                <Link to='/about' className="block mt-2 text-base text-gray1 font-normal hover:underline">
                  Employer Dashboard
                </Link>
                <Link to='' className="block mt-2 text-base text-gray1 font-normal hover:underline">
                  Submit Job
                </Link>

                <Link to='/contact' className="block mt-2 text-base text-gray1 font-normal hover:underline">
                  Job Packages
                </Link>
              </div>

              <div>
                <h3 className="text-black1 font-medium text-xl">Quick Links</h3>
                <Link to='/' className="block mt-2 text-base text-gray1 font-normal hover:underline">
                  About us

                </Link>
                <Link to='/about' className="block mt-2 text-base text-gray1 font-normal hover:underline">
                  Contact Us
                </Link>
                <Link to='' className="block mt-2 text-base text-gray1 font-normal hover:underline">
                  Terms
                </Link>

                <Link to='/contact' className="block mt-2 text-base text-gray1 font-normal hover:underline">
                  FAQ
                </Link>
              </div>
              <div>
                <h3 className="text-black1 font-medium text-xl">Follow Us</h3>
                <Link to='/' className="block mt-2 text-base text-gray1 font-normal hover:underline">
                  Instagram

                </Link>
                <Link to='/about' className="block mt-2 text-base text-gray1 font-normal hover:underline">
                  Facebook
                </Link>
                <Link to='' className="block mt-2 text-base text-gray1 font-normal hover:underline">
                  Pinterest
                </Link>

                <Link to='/contact' className="block mt-2 text-base text-gray1 font-normal hover:underline">
                  Tiktok
                </Link>
              </div>

            </div>
          </div>
        </div>
        <hr className="h-px my-6 bg-[#CECECE] border-none" />
        <div>
          <p className="text-center text-gray1 text-lg font-normal">© 2023 Upwork. All Right Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer