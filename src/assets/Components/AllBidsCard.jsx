import React from 'react'
import { BsBriefcase } from 'react-icons/bs';
import { CiCalendarDate } from 'react-icons/ci';
import { CiUndo } from 'react-icons/ci';
import { RxLoop } from 'react-icons/rx';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const AllBidsCard = ({ allBid }) => {
    const { biddingAmout, deadline, detaileId, email, emplEmail, jobTitle, featuredImage, category, status, _id } = allBid || {}

    const statusApprove = () => {
        console.log('Approve Application');
        fetch(`https://assignment11-server-site-ashen.vercel.app/updateStatus/${_id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': "application/json",
            },
            body: JSON.stringify({ status: 'In Progress' })
        })
            .then(res => res.json())
            .then(data => {
                toast.success('Job Approved Successfully')
                setTimeout(() => {
                    location.reload()
                }, 1000);
            })
    }
    const statusReject = () => {
        console.log('Approve Application');
        fetch(`https://assignment11-server-site-ashen.vercel.app/updateStatus/${_id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': "application/json",
            },
            body: JSON.stringify({ status: 'Canceled' })
        })
            .then(res => res.json())
            .then(data => {
                toast.error('Job Rejected Successfully')
                setTimeout(() => {
                    location.reload()
                }, 1000);
            })
    }
    return (
        <div className='p-5 border rounded-lg hover:shadow flex flex-col md:flex-row items-center justify-between'>
            <div className='flex items-start gap-x-3 flex-1'>
                <img className='w-16 h-auto rounded-md' src={featuredImage} alt="" />
                <div>
                    <h1 className='text-lg font- text-black1 hover:text-hover duration-200 cursor-pointer'>{jobTitle}</h1>
                    <div className='flex gap-3'>
                        <h1 className='text-sm flex items-center'> <BsBriefcase> </BsBriefcase> <span className='ml-2 my-1'>{category} </span>  </h1>
                        <h1 className='text-sm flex items-center'> <CiCalendarDate className='text-lg'> </CiCalendarDate> <span className='ml-2 my-1'>{deadline} </span>  </h1>
                    </div>
                    <span className='text-xs bg-[#DDE8F8] text-primery px-4 rounded-full text-center py-1 mt-1 inline-block'>${biddingAmout}</span>
                    <span className='text-xs bg-[#DDE8F8] text-primery px-4 rounded-full text-center py-1 mt-1 inline-block ml-2 '>{email}</span>
                    {
                        status == "Canceled" ? <span className='text-xs bg-[#777777] text-white px-4 rounded-full text-center py-1 mt-1 inline-block ml-2 '>{status}</span> : status == 'In Progress' ? <span className='text-xs bg-[#79B530] text-white px-4 rounded-full text-center py-1 mt-1 inline-block ml-2 '>{status}</span> : status == 'Complete' ? <span className='text-xs bg-primery text-white px-4 rounded-full text-center py-1 mt-1 inline-block ml-2 '>{status}</span> : <span className='text-xs bg-[#DDE8F8] text-primery px-4 rounded-full text-center py-1 mt-1 inline-block ml-2 '>{status}</span>
                    }
                </div>
            </div>
            {
                status == 'Complete' ? ''
                    :
                    status == 'In Progress' ?
                        <button onClick={statusReject} className=" w-9 h-9 grid place-items-center  bg-[#DDE8F8]  rounded-full tooltip" data-tip="Reject Application">  <RxLoop className='text-xl  text-primery'> </RxLoop>
                        </button>
                        : status == 'Canceled' ?
                            <button onClick={statusApprove} className=" w-9 h-9 grid place-items-center  bg-[#DDE8F8]  rounded-full tooltip" data-tip="Approve Application">  <CiUndo className='text-xl  text-primery'> </CiUndo>
                            </button> :
                            <div className='flex gap-2'>
                                {/* Reject Application */}
                                <button onClick={statusReject} className=" w-9 h-9 grid place-items-center  bg-[#DDE8F8]  rounded-full tooltip" data-tip="Reject Application">  <RxLoop className='text-xl  text-primery'> </RxLoop>
                                </button>
                                {/* Approve Application */}
                                <button onClick={statusApprove} className=" w-9 h-9 grid place-items-center  bg-[#DDE8F8]  rounded-full tooltip" data-tip="Approve Application">  <CiUndo className='text-xl  text-primery'> </CiUndo>
                                </button>
                            </div>
            }
            <ToastContainer />
        </div>

    )
}
export default AllBidsCard
