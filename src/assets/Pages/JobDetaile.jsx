import React, { useContext } from 'react'
import { contextProvider } from '../Components/AppContext'
import { useLoaderData, useParams } from 'react-router-dom'
import { BsArrowUpRight } from 'react-icons/bs'
import { BsBriefcase } from 'react-icons/bs';
import { CiCalendarDate } from 'react-icons/ci';
import { FaMoneyBillAlt } from 'react-icons/fa';
import { FcExpired } from 'react-icons/fc';
import { FcManager } from 'react-icons/fc';
import ApplyJob from '../Components/ApplyJob';
import { Helmet } from "react-helmet-async"


const JobDetaile = () => {
    const {  user } = useContext(contextProvider)
    const { id } = useParams()
    const jobs=useLoaderData()
    const singleJob = jobs.find(job => job._id == id)
    const { jobTitle, featuredImage, jobDescription, category, jobType, salaryType, minSalary, maxSalary, deadlineDate, experience, publishDate,email, _id } = singleJob || {}

    return (
        <div className=''>
             <Helmet>
                <title>Upwork | Job Detaile | {jobTitle} </title>
            </Helmet>
            <div className='container lg:w-[90%] mx-auto px-4 flex flex-col md:flex-row items-top gap-8 my-10'>
                <div className='flex-1 '>
                    <div className='items-start lg:items-center bg-[#F0F5F7] p-4 md:-6 lg:p-8 rounded-lg w-full flex  gap-x-5'>
                        <img className='w-[100px] rounded-lg' src={featuredImage} alt="" />
                        <div>
                            <h1 className='text-xl font-medium text-black1 hover:text-hover duration-200 cursor-pointer'>{jobTitle}</h1>
                            <div className='flex gap-3'>
                                <h1 className='text-sm flex items-center'> <BsBriefcase> </BsBriefcase> <span className='ml-2 my-1'>{category} </span>  </h1>
                                <h1 className='text-sm flex items-center'> <CiCalendarDate className='text-lg'> </CiCalendarDate> <span className='ml-2 my-1'>{deadlineDate} </span>  </h1>
                            </div>
                            <span className='text-xs bg-[#DDE8F8] text-primery px-4 rounded-full text-center py-1 mt-1 inline-block'>{jobType}</span>
                            <span className='text-xs bg-[#DDE8F8] text-primery px-4 rounded-full text-center py-1 mt-1 inline-block ml-2 '>{salaryType}</span>
                            <span className='text-xs bg-[#DDE8F8] text-primery px-4 rounded-full text-center py-1 mt-1 inline-block ml-2 '>${minSalary} - ${maxSalary}</span>
                        </div>
                    </div>
                    <div className='mt-10'>
                        <h1 className='text-xl text-black font-normal mb-3'>Job Description</h1>
                        <p className='text-base text-textColor font-normal'>{jobDescription}</p>
                    </div>
                </div>
                <div className='w-full  md:w-[300px] '>
                    <div className=''>
                        <div className='text-center bg-[#F0F5F7] p-4 md:p-6 lg:p-8 rounded-lg  md:order-none mb-8 '>
                            <h1 className='text-xl text-black font-normal text-center'>Application ends:</h1>
                            <h1 className='text-base text-textColor font-normal text-center'>{deadlineDate}</h1>
                            { user?.email !== email? <a href='#applyJob' className='text-base text-center bg-primery hover:bg-transparent hover:bordder hover:border-primery border px-8 py-3 mt-1  rounded-lg duration-300 text-white font-normal hover:text-primery inline-block'> <span className='flex gap-2'>Apply Now  <BsArrowUpRight> </BsArrowUpRight> </span></a>: <a href='#applyJob' className='mt-1 text-base text-center font-normal text-white py-3 px-10 bg-gray-400  border border-gray-400 cursor-not-allowed   rounded-lg inline-block'> <span className='flex gap-2'>Apply Now  <BsArrowUpRight> </BsArrowUpRight> </span></a>}

                             </div>
                    </div>
                    <div>
                        <div className='bg-[#F0F5F7] p-5 md:p-6 lg:p-8 rounded-lg'>
                            <h1 className='text-xl text-black font-normal mb-3'>Job Overview</h1>
                            {/* side bar items */}
                            <div className='flex gap-2'>
                                <CiCalendarDate className='text-2xl text-hover'> </CiCalendarDate>
                                <div>
                                    <h1 className='text-base text-black font-normal'>Date Posted</h1>
                                    <h1 className='text-sm text-textColor font-normal'>{publishDate}</h1>
                                </div>
                            </div> 
                            <div className='flex gap-2  mt-4'>
                                <BsBriefcase className='text-xl text-hover'> </BsBriefcase>
                                <div>
                                    <h1 className='text-base text-black font-normal'>Category</h1>
                                    <h1 className='text-sm text-textColor font-normal'>{category}</h1>
                                </div>
                            </div>

                            <div className='flex gap-2 mt-4'>
                                <FaMoneyBillAlt className='text-2xl text-hover'> </FaMoneyBillAlt>
                                <div>
                                    <h1 className='text-base text-black font-normal'>Offered Salary: </h1>
                                    <h1 className='text-sm text-textColor font-normal'>${minSalary} - ${maxSalary}</h1>
                                </div>
                            </div>
                            <div className='flex gap-2 mt-4'>
                                <FcExpired className='text-2xl text-hover'> </FcExpired>
                                <div>
                                    <h1 className='text-base text-black font-normal'>Expiration date:</h1>
                                    <h1 className='text-sm text-textColor font-normal'>{deadlineDate}</h1>
                                </div>
                            </div>
                            <div className='flex gap-2 mt-4'>
                                <FcManager className='text-2xl !text-red-400'> </FcManager>
                                <div>
                                    <h1 className='text-base text-black font-normal'>Experience</h1>
                                    <h1 className='text-sm text-textColor font-normal'>{experience}</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <ApplyJob singleJob={singleJob}> </ApplyJob>

        </div>
    )
}

export default JobDetaile