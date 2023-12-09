const HeroSection = ({searchData}) => {
  const handelSearch = (e) => {
    e.preventDefault()
    return searchData(e.target.filter.value)
  }
  return (
    <div className='py-10 flex items-center justify-center h-[500px]' style={{ backgroundImage: `url('https://i.ibb.co/9V76GdC/slider16.jpg')` }}>
      <div className='container md:w-10/12/ lg:w-[43%] mx-auto px-4 text-center space-y-6'>
        <h1 className='text-4xl md:text-5xl font-bold text-white'>Find The Best Job</h1>
        <p className='text-lg text-white  font-normal'>Resume-Library is a true performance-based job board. Enjoy custom hiring products and access to up to 10,000 new resume registrations daily, with no subscriptions or user licences.</p>
        <form onSubmit={handelSearch}>
          <div className='relative h-[60px]'>
            <input type="text" className='text-base placeholder:text-textColor bg-sectionbg rounded-full border duration-300 focus:bg-white focus:shadow-sm focus:border focus:border-primery outline-none h-full px-7 w-full' placeholder='Job title, or Category' name='filter' />
            <input type="submit" value="Find Jobs" className='text-lg font-normal text-white py-3 px-10 bg-primeryk border border-primery hover:border-hover bg-hover hover:bg-transparent hover:text-primery duration-300 rounded-full absolute top-[3px] right-1 ' />
          </div>
        </form>
      </div>
    </div>
  )
}
export default HeroSection