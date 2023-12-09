import React, { useContext, useEffect, useState } from 'react'
import { contextProvider } from '../Components/AppContext'
import MyPostJobCard from '../Components/MyPostJobCard'
import { Helmet } from "react-helmet-async"


const Mypostedjobs = () => {
  const { user } = useContext(contextProvider)
  const [myPosted, setMyPosted] = useState([])
  useEffect(() => {
    if (user?.email) {
      fetch(`https://assignment11-server-site-ashen.vercel.app/mypostedjob?email=${user?.email}`)
        .then(res => res.json())
        .then(data => setMyPosted(data))
    }
  }, [user?.email])
  return (
    <div className='bg-[#F5F7FC]'>
      <Helmet>
        <title>Upwork | My Posted Jobs </title>
      </Helmet>
      <div className='container mx-auto px-4'>
        <div className='py-10'>
          <h1 className='text-3xl text-black1 font-medium mb-6'>My Posted Jobs</h1>
          <div className='p-6 bg-white'>

            <div>  </div>

            <div className="overflow-x-auto">
              <table className="table ">
                {/* head */}
                <thead className='px-10'>
                  <tr className='bg-[#F5F7FC]'>
                    <th className='text-lg font-normal text-hover p-3 ml-5'>Job Title & Cagetory</th>
                    <th className='text-lg font-normal text-hover p-3 ml-5'>Job Inof</th>
                    <th className='text-lg font-normal text-hover p-3'> Created & Expired</th>
                    <th className='text-lg font-normal text-hover p-3'>Actions</th>
                  </tr>
                </thead>
                <tbody>

                  {
                    myPosted.map(mypostJob => <MyPostJobCard key={mypostJob._id} mypostJob={mypostJob}></MyPostJobCard>)
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

export default Mypostedjobs