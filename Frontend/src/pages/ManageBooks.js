import React from 'react'
import ManageBookCard from '../components/ManageBookCard'

function ManageBooks() {
  return (
    <div>
        <div className=' flex flex-col space-y-8  flex-wrap relative top-10 justify-center items-center font-serif'>
        <h1 className='text-3xl'>Your Publication</h1>
            <div className='manage-box border-4 w-4/5 h-80 flex-wrap'>
                <ManageBookCard/>
            </div>
        </div>
    </div>
  )
}

export default ManageBooks