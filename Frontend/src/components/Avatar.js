import React, { useState } from 'react'
import img1 from '../images/avatars/IMG_20240304_235550.jpg';
import img2 from '../images/avatars/IMG_20240304_235631.jpg'
import img3 from '../images/avatars/IMG_20240304_235641.jpg'
import img4 from '../images/avatars/IMG_20240304_235654.jpg'
import img5 from '../images/avatars/IMG_20240304_235708.jpg'
import img6 from '../images/avatars/IMG_20240304_235729.jpg'
import img7 from '../images/avatars/IMG_20240304_235747.jpg'
import img9 from '../images/avatars/IMG_20240304_235808.jpg'


function Avatar({setIsModalOpen,handleImageSelect}) {

  return (
    <div>
        <div className='modal-avatar'>
            <h1 className=' text-center font-serif p-4 text-2xl'>Select Avatar</h1>
            <div className='image-container border-4 w-auto p-5 gap-x-4 gap-y-2  h-[250px] flex flex-wrap'>
               <img src={img3} className='same-size' onClick={()=>handleImageSelect(img3)}/>
               <img src={img4} className='same-size' onClick={()=>handleImageSelect(img4)}/>
               <img src={img9} className='same-size' onClick={()=>handleImageSelect(img9)}/>
               <img src={img1} className='same-size' onClick={()=>handleImageSelect(img1)}/>
               <img src={img6} className='same-size' onClick={()=>handleImageSelect(img6)}/>
               <img src={img2} className='same-size' onClick={()=>handleImageSelect(img2)}/>
               <img src={img5} className='same-size' onClick={()=>handleImageSelect(img5)}/>
               <img src={img7} className='same-size' onClick={()=>handleImageSelect(img7)}/>
               

            </div>
         
        </div>
        <div className='overlay-avatar ' onClick={()=>setIsModalOpen(false)}> </div>
    </div>
  )
}

export default Avatar