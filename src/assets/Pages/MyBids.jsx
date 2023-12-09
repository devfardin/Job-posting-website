import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { contextProvider } from '../Components/AppContext'
import MyBidCard from '../Components/MyBidCard'
import { Helmet } from "react-helmet-async"

const MyBids = () => {
  const { user } = useContext(contextProvider)
  const [myBids, setMyBids] = useState([])
  useEffect(() => {
    if(user?.email){
      axios.get(`https://assignment11-server-site-ashen.vercel.app/mybidsjob?email=${user?.email}`)
      .then(res => {
        setMyBids(res.data)
      })
    }
  }, [user?.email])
  return (
    <div className='bg-[#F5F7FC]'>
       <Helmet>
                <title>Upwork | My Bids </title>
            </Helmet>
      <div className='container mx-auto px-4'>
        <div className='py-10'>
          <h1 className='text-3xl text-black1 font-medium mb-6'>Applied Jobs</h1>
          <div className='p-6 bg-white'>
            <div>  </div>

            <div className="overflow-x-auto">
              <table className="table ">
                {/* head */}
                <thead className='px-10'>
                  <tr className='bg-[#F5F7FC]'>
                    <th className='text-lg font-normal text-hover p-3 ml-5'>Job Title</th>
                    <th className='text-lg font-normal text-hover p-3'>Email</th>
                    <th className='text-lg font-normal text-hover p-3'>Date Applied</th>
                    <th className='text-lg font-normal text-hover p-3'>Status</th>
                    <th className='text-lg font-normal text-hover p-3'>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    myBids.map(mybid => <MyBidCard key={mybid._id} mybid={mybid}></MyBidCard>)
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default MyBids