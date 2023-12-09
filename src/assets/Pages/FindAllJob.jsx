import React, { useState } from 'react'
import Jobs from '../Components/Jobs'
import { Helmet } from "react-helmet-async"
const FindAllJob = () => {
    const [search, setSearch] = useState('')
    const handelSearch = (e) => {
        e.preventDefault()
        const search=e.target.filter.value;
      const makelower = search.toLowerCase()
      setSearch(makelower)
    }
    return (
        <div>
             <Helmet>
                <title>Upwork | Find Jobs</title>
            </Helmet>
                <div className='bg-gradient-to-r from-[#F2F5FC] to-[#E4ECF7] h-72 flex items-center'>
            <div className='container md:w-10/12/ lg:w-[43%] mx-auto px-4'>
                    <form onSubmit={handelSearch}>
                        <h1 className='text-3xl font-medium text-black1 mb-4 text-center'>Find The Best Job</h1>
                        <div className='relative h-[60px]'>
                            <input type="text" className='text-base placeholder:text-textColor bg-white rounded-lg border duration-300 focus:bg-white focus:shadow-sm focus:border focus:border-primery outline-none h-full px-7 w-full' placeholder='Job title, or Category' name='filter' />
                            <input type="submit" value="Find Jobs" className='text-lg font-normal text-white py-3 px-10 bg-primeryk border border-primery hover:border-hover bg-hover hover:bg-transparent hover:text-hover duration-300 rounded-lg absolute top-[3px] right-1 ' />
                        </div>
                    </form>
                </div>
            </div>

            <div>
            <Jobs  search={search}></Jobs>
            </div>
        </div>
    )
}
export default FindAllJob