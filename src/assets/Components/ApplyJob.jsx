import React, { useContext, useEffect } from 'react'
import { contextProvider } from '../Components/AppContext'
import swal from 'sweetalert'
const ApplyJob = ({ singleJob }) => {
    
  
          
    const { user } = useContext(contextProvider)
    const { jobTitle, featuredImage, category, jobType, salaryType, minSalary, maxSalary, deadlineDate, experience, publishDate, email, _id  } = singleJob
    const appJobHandel = (e) => {
        e.preventDefault()
        const form = e.target
        const biddingAmout = form.amount.value;
       const deadline = form.Deadline.value;
        const email = form.Youremail.value;
        const emplEmail = form.JobOwnerEmail.value;
        const detaileId= _id
        const applyJobData={biddingAmout, deadline, email,emplEmail, jobTitle, featuredImage, category, status:'Panding', detaileId }

        fetch('https://assignment11-server-site-ashen.vercel.app/applyjob', {
            method: 'POST',
            headers: {
                'Content-Type':  "application/json",
            },
            body: JSON.stringify(applyJobData)
        })
        .then(res=> res.json())
        .then(data=>{
            swal("success", "Your application has been received", "success");
            setTimeout(() => {
                window.location.href = '/My-Bids';
            }, 1000);
            return
        })
    }
    return (
        <div className='bg-sectionbg py-14' id='applyJob'>
            <div className='container lg:w-[90%] mx-auto px-4'>
                <form onSubmit={appJobHandel}>
                    <div className='bg-white px-7 py-10 rounded-lg'>
                        <h1 className='text-3xl font-medium text-black mb-4'>Apply for this job</h1>
                        <div className='flex justify-between gap-x-6 items-center'>
                            <div className='flex-1'>
                                <label className='text-lg font-normal text-black1 mb-1 ml-1 mt-5 block'>Your Bidding Amount</label>
                                <input className='text-base placeholder:text-textColor bg-sectionbg rounded-lg border duration-300 focus:bg-white focus:shadow-sm focus:border focus:border-primery outline-none py-4 px-5 w-full' name='amount' type='text' />
                            </div>
                            <div className='flex-1'>
                                <label className='text-lg font-normal text-black1 mb-1 ml-1 mt-5 block'>Deadline </label>
                                <input className='text-base placeholder:text-textColor bg-sectionbg rounded-lg border duration-300 focus:bg-white focus:shadow-sm focus:border focus:border-primery outline-none py-4 px-5 w-full' name='Deadline' type='date' />
                            </div>
                        </div>
                        <div className='flex justify-between gap-x-6 items-center'>
                            <div className='flex-1'>
                                <label className='text-lg font-normal text-black1 mb-1 ml-1 mt-5 block'>Your Email</label>
                                <input readOnly className='text-base placeholder:text-textColor bg-sectionbg rounded-lg border duration-300 focus:bg-white focus:shadow-sm focus:border focus:border-primery outline-none py-4 px-5 w-full' name='Youremail' defaultValue={user?.email} type='email' />
                            </div>
                            <div className='flex-1'>
                                <label className='text-lg font-normal text-black1 mb-1 ml-1 mt-5 block'>Job Owner's Email  </label>
                                <input readOnly className='text-base placeholder:text-textColor bg-sectionbg rounded-lg border duration-300 focus:bg-white focus:shadow-sm focus:border focus:border-primery outline-none py-4 px-5 w-full' name='JobOwnerEmail' defaultValue={email} type='email' />
                            </div>
                        </div>
                        <div>
                            { user?.email !== email?  <input type="submit" value="Submit Bid" className='text-lg font-normal text-white py-3 px-10 bg-primeryk border border-primery hover:border-hover bg-hover hover:bg-transparent hover:text-primery duration-300 rounded-lg cursor-pointer mt-7 '/> :  <input disabled type="submit" value="Submit Bid" className='text-lg font-normal text-white py-3 px-10 bg-gray-400  border border-gray-400 cursor-not-allowed   rounded-lg mt-7 '/>
                            }
                        </div> 
                    </div>
                </form>
            </div>
        </div>
    )
}
export default ApplyJob