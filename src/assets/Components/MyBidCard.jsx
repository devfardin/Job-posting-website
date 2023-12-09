import React from 'react'
import { BsBriefcase } from 'react-icons/bs';
import { AiOutlineDollar } from 'react-icons/ai';
import { BsEye, BsCheckLg } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { RxCross2 } from 'react-icons/rx';
import Swal from 'sweetalert2';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const MyBidCard = ({ mybid }) => {
    const { biddingAmout, deadline, detaileId, email, emplEmail, jobTitle, featuredImage, category, status, _id } = mybid || {}
    const handelDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://assignment11-server-site-ashen.vercel.app/mybidjobdelete/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            })
                            setTimeout(() => {
                                window.location.reload()
                            }, 1000);
                            
                        }
                    })
            }
        })
    }
    const statusComplete=()=>{
        console.log('Approve Application');
        fetch(`https://assignment11-server-site-ashen.vercel.app/updateStatus/${_id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': "application/json",
            },
            body: JSON.stringify({status:'Complete'})
        })
            .then(res => res.json())
            .then(data => {
                toast.error('Job Rejected Successfully')
                setTimeout(() => {
                    window.location.reload()
                }, 1000);
            })
    }
    return (
        <tr className='border-b py-10  border-sectionbg'>
            <td>
                <div className="flex items-center space-x-4">
                    <div className="w-14 h-14">
                        <img src={featuredImage} alt="Job feature image" />
                    </div>
                    <div>
                        <div className="text-lg font-normal text-black1">{jobTitle}</div>
                        <div className='flex gap-3'>
                            <h1 className='text-sm flex items-center'> <BsBriefcase> </BsBriefcase> <span className='ml-2 my-1'>{category} </span>  </h1>
                            <h1 className='text-sm flex items-center'> <AiOutlineDollar className='text-lg'> </AiOutlineDollar> <span className='ml-1 my-1'>{biddingAmout} </span>  </h1>
                        </div>
                    </div>
                </div>
            </td>
            <td className='text-base text-textColor font-normal'>
                {emplEmail}
            </td>
            <td className='text-base text-textColor font-normal'>
                {deadline}
                <ToastContainer/>
            </td>
            <td>
                {
                    status == "Canceled" ? <span className='text-xs bg-[#777777] text-white px-4 rounded-full text-center py-1 mt-1 inline-block ml-2 '>{status}</span> : status == 'In Progress' ? <span className='text-xs bg-[#79B530] text-white px-4 rounded-full text-center py-1 mt-1 inline-block ml-2 '>{status}</span> : status == 'Complete'? <span className='text-xs bg-primery text-white px-4 rounded-full text-center py-1 mt-1 inline-block ml-2 '>{status}</span> : <span className='text-xs bg-[#DDE8F8] text-primery px-4 rounded-full text-center py-1 mt-1 inline-block ml-2 '>{status}</span>
                }
            </td>
          
            <th className='flex justify-end'>
                <div className='flex gap-x-3'>
                    {
                        status == 'In Progress' ? <button onClick={() => statusComplete(_id)} className="w-9 h-9 grid place-items-center  bg-[#DDE8F8]  rounded-full tooltip font-normal" data-tip="Complete">
                            <BsCheckLg className='text-xl  text-primery'> </BsCheckLg>
                        </button>
                            : status == 'Complete' ? '' :
                            <button onClick={() => handelDelete(_id)} className="w-9 h-9 grid place-items-center  bg-[#DDE8F8]  rounded-full tooltip font-normal" data-tip="Remove">
                                <RxCross2 className='text-xl  text-primery'> </RxCross2>
                            </button>
                    }
                    <Link to={`/job/${detaileId}`} className="w-9 h-9 grid place-items-center  bg-[#DDE8F8]  rounded-full tooltip font-normal" data-tip="View Job">
                        <BsEye className='text-xl  text-primery'> </BsEye>
                    </Link>
                </div>
            </th>
        </tr>
    )
}
export default MyBidCard