import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div className='mt-16 flex justify-center items-center container px-4 m-auto text-center'>
      <div>
        <img className='inline' src="https://i.ibb.co/X7wvV1w/error.jpg" alt="Error" />
        <h1 className='text-6xl text-black1 font-medium my-4'>404</h1>
        <p className='text-lg text-textColor font-normal mb-4 w-9/12 mx-auto'>Sorry but the page you are looking for does not exist, have been removed, name changed or is temporarity unavailable.
        </p>
        <Link to='/' className='text-base px-10 py-3 bg-primery hover:bg-hover rounded-lg text-white mt-4 inline-block duration-300'>Go To Home</Link>
      </div>

    </div>
  )
}

export default ErrorPage