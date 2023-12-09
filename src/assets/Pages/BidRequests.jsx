import React, { useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import AllBidsCard from '../Components/AllBidsCard'
import { Helmet } from "react-helmet-async"

const BidRequests = () => {
  const allBidData = useLoaderData()
  const [getResult, setResult] = useState('')

  const handelsort = (e) => {
    e.preventDefault();
    const result = e.target.value;
    setResult(result)
  };
  return (
    <div className='bg-[#F5F7FC]'>
      <Helmet>
        <title>Upwork | Bid Request</title>
      </Helmet>
      <div className='container mx-auto px-4'>
        <div className='py-10'>
          <h1 className='text-3xl text-black1 font-medium mb-6'>Application History</h1>
          <div className='p-6 bg-white'>
            <div className='flex flex-col md:flex-row justify-between items-center mb-6 '>
              <h1 className='text-lg font-normal text-textColor ml-2 mb-4'>Showing all {allBidData.length} results</h1>
              <div className='w-80'>
                <form onChange={handelsort}>
                  <select className='text-base placeholder:text-textColor bg-sectionbg rounded-lg border duration-300 focus:bg-white focus:shadow-sm focus:border focus:border-primery outline-none py-3 px-5 w-full' defaultValue={'All jobs'} name='sort'>
                    <option>All jobs</option>
                    <option>Complete</option>
                    <option>In Progress</option>
                    <option>Panding</option>
                    <option>Canceled</option>
                  </select>
                </form>
              </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              {/* head */}
              {
                allBidData?.filter((job) => { 
                  return getResult === 'All jobs' ? true :
                    (job.status && job.status.includes(getResult))
                }).map(allBid => <AllBidsCard key={allBid._id} allBid={allBid}></AllBidsCard>)
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default BidRequests