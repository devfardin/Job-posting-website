import React, { useContext } from 'react'
import { contextProvider } from '../Components/AppContext'
import Swal from 'sweetalert2'
import { Helmet } from "react-helmet-async"

const AddJobs = () => {
    const { user } = useContext(contextProvider)

    const addJobHandel = (e) => {
        e.preventDefault();
        const form = e.target
        const jobTitle = form.jobtitle.value;
        const featuredImage = form.FeaturedImage.value;
        const jobDescription = form.jobDescription.value;
        const category = form.category.value;
        const jobType = form.jobType.value;
        const email = form.email.value;
        const salaryType = form.salaryType.value;
        const minSalary = form.minSalary.value;
        const maxSalary = form.maxSalary.value;
        const deadlineDate = form.deadlineDate.value;
        const experience = form.experience.value;
        const today = new Date()
        const publishDate = (today.toLocaleDateString("en-US"))
        const postInfo={jobTitle, featuredImage, jobDescription, category, jobType, email, salaryType, minSalary, maxSalary, deadlineDate, experience, publishDate}

     
            fetch('https://assignment11-server-site-ashen.vercel.app/postjob', {
                method: 'POST',
                headers: {
                    'Content-Type':  "application/json",
                },
                body: JSON.stringify(postInfo)
            })
            .then(res=> res.json())
            .then(data=> {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Success! Job Uploaded",
                    showConfirmButton: false,
                    timer: 1500
                  });
                setTimeout(() => {
                    form.reset()
                window.location.href = '/My-posted-jobs'  
                }, 1000);   
            })
        
    }
    return (
        <div className='bg-sectionbg py-14'>
             <Helmet>
                <title>Upwork | Submite Job</title>
            </Helmet>
            <div className='container md:container lg:w-3/4 mx-auto px-4'>
                <form onSubmit={addJobHandel}>
                    <div className='bg-white px-6 py-10 rounded-lg'>
                        <h1 className='text-3xl font-medium text-black mb-4'>Post a New Job</h1>
                        <div className='flex flex-col md:flex-row  justify-between md:gap-x-6 gap-y-3 items-center'>
                            <div className='w-full md:flex-1'>
                                <label className='text-lg font-normal text-black1 mb-1 ml-1 mt-5 block'>Job Title </label>
                                <input className='text-base placeholder:text-textColor bg-sectionbg rounded-lg border duration-300 focus:bg-white focus:shadow-sm focus:border focus:border-primery outline-none py-4 px-5 w-full' name='jobtitle' type='text' />
                            </div>
                            <div className='w-full md:flex-1'>
                                <label className='text-lg font-normal text-black1 mb-1 ml-1 mt-5 block'>Featured Image</label>
                                <input className='text-base placeholder:text-textColor bg-sectionbg rounded-lg border duration-300 focus:bg-white focus:shadow-sm focus:border focus:border-primery outline-none py-4 px-5 w-full' placeholder='Image Url' name='FeaturedImage' type='text' />
                            </div>
                        </div>
                        <label className='text-lg font-normal text-black1 mb-1 ml-1 mt-5 block'>Job Description </label>
                        <textarea className='text-base placeholder:text-textColor bg-sectionbg rounded-lg border duration-300 focus:bg-white focus:shadow-sm focus:border focus:border-primery outline-none py-4 px-5 w-full h-32' name='jobDescription' >
                        </textarea>
                        <div className='flex flex-col md:flex-row  justify-between md:gap-x-6 gap-y-3 items-center'>
                            <div className='w-full md:flex-1'>
                                <label className='text-lg font-normal text-black1 mb-1 ml-1 mt-5 block'>Category</label>
                                <select className='text-base placeholder:text-textColor bg-sectionbg rounded-lg border duration-300 focus:bg-white focus:shadow-sm focus:border focus:border-primery outline-none py-4 px-5 w-full' name='category' type='text'>
                                    <option>Web Development</option>
                                    <option>Digital Marketing </option>
                                    <option>Graphics Design</option>
                                    <option>Customer Service</option>
                                </select>
                            </div>
                            <div className='w-full md:flex-1'>
                                <label className='text-lg font-normal text-black1 mb-1 ml-1 mt-5 block'>Type </label>
                                <select className='text-base placeholder:text-textColor bg-sectionbg rounded-lg border duration-300 focus:bg-white focus:shadow-sm focus:border focus:border-primery outline-none py-4 px-5 w-full' name='jobType' type='text'>
                                    <option>Freelance</option>
                                    <option>Full Time</option>
                                    <option>Internship</option>
                                    <option>Part Time</option>
                                    <option>Temporary</option>
                                </select>
                            </div>
                        </div>
                        <div className='flex flex-col md:flex-row  justify-between md:gap-x-6 gap-y-3 items-center'>
                            <div className='w-full md:flex-1'>
                                <label className='text-lg font-normal text-black1 mb-1 ml-1 mt-5 block'>Email</label>
                                <input readOnly className='text-base placeholder:text-textColor bg-sectionbg rounded-lg border duration-300 focus:bg-white focus:shadow-sm focus:border focus:border-primery outline-none py-4 px-5 w-full' name='email' defaultValue={user?.email} type='email' />
                            </div>
                            <div className='w-full md:flex-1'>
                                <label className='text-lg font-normal text-black1 mb-1 ml-1 mt-5 block'>Salary Type</label>
                                <select className='text-base placeholder:text-textColor bg-sectionbg rounded-lg border duration-300 focus:bg-white focus:shadow-sm focus:border focus:border-primery outline-none py-4 px-5 w-full' name='salaryType' type='text'>
                                    <option>Monthly</option>
                                    <option>Weekly</option>
                                    <option>Hourly</option>
                                    <option>Daily</option>
                                    <option>Yearly</option>
                                </select>
                            </div>
                        </div>
                        <div className='flex flex-col md:flex-row  justify-between md:gap-x-6 gap-y-3 items-center'>
                            <div className='w-full md:flex-1'>
                                <label className='text-lg font-normal text-black1 mb-1 ml-1 mt-5 block'>Min. Salary </label>
                                <input className='text-base placeholder:text-textColor bg-sectionbg rounded-lg border duration-300 focus:bg-white focus:shadow-sm focus:border focus:border-primery outline-none py-4 px-5 w-full' name='minSalary' type='text' />
                            </div>
                            <div className='w-full md:flex-1'>
                                <label className='text-lg font-normal text-black1 mb-1 ml-1 mt-5 block'>Max. Salary</label>
                                <input className='text-base placeholder:text-textColor bg-sectionbg rounded-lg border duration-300 focus:bg-white focus:shadow-sm focus:border focus:border-primery outline-none py-4 px-5 w-full' name='maxSalary' type='text' />
                            </div>
                        </div>
                        <div className='flex flex-col md:flex-row  justify-between md:gap-x-6 gap-y-3 items-center'>
                            <div className='w-full md:flex-1'>
                                <label className='text-lg font-normal text-black1 mb-1 ml-1 mt-5 block'>Application Deadline Date </label>
                                <input className='text-base placeholder:text-textColor bg-sectionbg rounded-lg border duration-300 focus:bg-white focus:shadow-sm focus:border focus:border-primery outline-none py-4 px-5 w-full' name='deadlineDate' type='date' />
                            </div>
                            <div className='w-full md:flex-1'>
                                <label className='text-lg font-normal text-black1 mb-1 ml-1 mt-5 block'>Experience</label>
                                <select className='text-base placeholder:text-textColor bg-sectionbg rounded-lg border duration-300 focus:bg-white focus:shadow-sm focus:border focus:border-primery outline-none py-4 px-5 w-full' name='experience' type='text'>
                                    <option>Fresh</option>
                                    <option>1 Year</option>
                                    <option>2 Year</option>
                                    <option>3 Year</option>
                                    <option>4 Year</option>
                                </select>
                            </div>
                        </div>
                        <input type="submit" value="Post Job" className='text-xl font-normal text-white py-3 px-10 bg-primeryk border border-primery hover:border-hover bg-hover hover:bg-transparent hover:text-primery duration-300 rounded-lg mt-7 ' />
                    </div>
                </form>

            </div>
        </div>
    )
}

export default AddJobs