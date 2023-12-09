import React, { useContext } from 'react'
import { contextProvider } from './AppContext'
import Job from './Job'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Link } from 'react-router-dom';
import { BsArrowUpRight } from 'react-icons/bs'


const Jobs = ({ itemsCount, search }) => {
    const { jobs } = useContext(contextProvider)
    const WebDevelopment = jobs.filter(items => items.category === 'Web Development')
    const GraphicsDesign = jobs.filter(items => items.category === 'Graphics Design')
    const DigitalMarketing = jobs.filter(items => items.category === 'Digital Marketing')
    const CustomerService = jobs.filter(items => items.category === 'Customer Service')


    return (
        <div className='container px-4 mx-auto pt-14 pb-5'>
            <h1 className='text-3xl text-black1 font-medium mb-2 text-center'>Featured Jobs</h1>
            <p className='text-base text-textColor font-normal mb-10 text-center'>Know your worth and find the job that qualify your life</p>
            <div>
                <Tabs>
                    <TabList className='text-center'>
                        <Tab className="text-base bg-primery  font-normal inline-block ml-6 text-center cursor-pointer text-white rounded-lg p-2">All Jobs</Tab>
                        <Tab className="text-base bg-primery  font-normal inline-block ml-6 text-center cursor-pointer text-white rounded-lg p-2">Web Development</Tab>
                        <Tab className="text-base bg-primery  font-normal inline-block ml-6 text-center cursor-pointer text-white rounded-lg p-2">Graphics Design </Tab>
                        <Tab className="text-base bg-primery  font-normal inline-block ml-6 text-center cursor-pointer text-white rounded-lg p-2">Digital Marketing</Tab>
                        <Tab className="text-base bg-primery  font-normal inline-block ml-6 text-center cursor-pointer text-white rounded-lg p-2">Customer Service</Tab>

                    </TabList>

                    <TabPanel>

                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5 my-10'>
                            {
                                jobs?.filter((job) => {
                                    return search === '' ? true :
                                        (job.jobTitle && job.jobTitle.toLowerCase().includes(search)) ||
                                        (job.category && job.category.toLowerCase().includes(search))
                                }).slice(0, itemsCount).map((job) => <Job key={job.id} job={job}></Job>)
                            }
                           
                        </div>
                    </TabPanel>

                    <TabPanel>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5 mt-10'>
                            {
                                WebDevelopment.map((job) => <Job key={job.id} job={job}></Job>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5 mt-10'>
                            {
                                GraphicsDesign.map((job) => <Job key={job.id} job={job}></Job>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5 mt-10'>
                            {
                                DigitalMarketing.map((job) => <Job key={job.id} job={job}></Job>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5 mt-10'>
                            {
                                CustomerService.map((job) => <Job key={job.id} job={job}></Job>)
                            }
                        </div>
                    </TabPanel>
                </Tabs>
            </div>

            {/* <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5`}>
                {
                    jobs?.filter((job) => {
                        return search === '' ? true :
                            (job.jobTitle && job.jobTitle.toLowerCase().includes(search)) ||
                            (job.category && job.category.toLowerCase().includes(search))
                    }).slice(0, itemsCount).map((job) => <Job key={job.id} job={job}></Job>)
                }
            </div> */}
        </div>
    )
}
export default Jobs