import React from 'react'
import { BsBriefcase } from 'react-icons/bs';
import { CiCalendarDate } from 'react-icons/ci';
import { Link } from 'react-router-dom';
const Job = ({job}) => {
    const {jobTitle, featuredImage, jobDescription, category, jobType, salaryType, minSalary, maxSalary, deadlineDate, experience, _id}=job
  return (
   <Link to={`/job/${_id}`}>
    <div className='p-5 border rounded-lg hover:shadow'>
     <div className='flex items-start gap-x-3'>
        <img className='w-14 h-auto rounded-full' src={featuredImage} alt="" />
        <div>
            <h1 className='text-lg font- text-black1 hover:text-hover duration-200 cursor-pointer'>{jobTitle}</h1>
           <div className='flex gap-3'>
           <h1 className='text-sm flex items-center'> <BsBriefcase> </BsBriefcase> <span className='ml-2 my-1'>{category} </span>  </h1>
             <h1 className='text-sm flex items-center'> <CiCalendarDate className='text-lg'> </CiCalendarDate> <span className='ml-2 my-1'>{deadlineDate} </span>  </h1>
           </div>
            <span className='text-xs bg-[#DDE8F8] text-primery px-4 rounded-full text-center py-1 mt-1 inline-block'>{jobType}</span>
            <span className='text-xs bg-[#DDE8F8] text-primery px-4 rounded-full text-center py-1 mt-1 inline-block ml-2 '>{salaryType}</span>
            <span className='text-xs bg-[#DDE8F8] text-primery px-4 rounded-full text-center py-1 mt-1 inline-block ml-2 '>${minSalary} - ${maxSalary}</span> 
        </div>
     </div>
    </div>
   </Link>
  )
}

export default Job