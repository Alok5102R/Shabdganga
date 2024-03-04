import React from 'react';
import img from '../images/book5.jpg'
import { useNavigate } from 'react-router-dom';

function ManageBookCard() {
    const navigate = useNavigate();
  return (
    <div className='p-4'>
        <div className='flex flex-col gap-4 w-[18%] p-2 justify-center items-center shadow-[0_3px_10px_rgb(0,0,0,0.2)]'>
        <img src={img} alt=''
            className='t h-48 w-40'
        />
        <p>Title: Book Title</p>
        <div className='flex justify-between gap-16'>
        <button className='text-white bg-sky-600 w-16 rounded-md' onClick={()=>navigate('/ViewBook')}>View</button>
        <button className='text-white bg-red-600 w-16 rounded-md'>Remove</button>
        </div>
        </div>
    </div>
  )
}

export default ManageBookCard