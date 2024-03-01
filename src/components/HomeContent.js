import React from 'react'
import img1 from '../images/book1.jpg'
import img2 from '../images/book2.jpeg'
import img3 from '../images/book3.jpg'
import img4 from '../images/book4.jpeg'
import img5 from '../images/book5.jpg'
import img6 from '../images/book6.jpg'
import BookCard from './BookCard'

import new1 from '../images/new1.jpg'
import new2 from '../images/new2.jpg'
import new3 from '../images/new3.jpeg'
import new4 from '../images/new4.jpeg'
import new5 from '../images/new5.jpg'
import new6 from '../images/new6.jpg'
import new7 from '../images/new7.jpg'
import new8 from '../images/new8.jpg'


const Books = [
    {img: img1, title:'The Alchemist', author:"Paulo Coelho",type:"Social"},
    {img: img2, title:'The Alchemist', author:"Paulo Coelho",type:"Social"},
    {img: img3, title:'The Alchemist', author:"Paulo Coelho",type:"Social"},
    {img: img4, title:'The Alchemist', author:"Paulo Coelho",type:"Social"},
    {img: img5, title:'The Alchemist', author:"Paulo Coelho",type:"Social"},
    {img: img6, title:'The Alchemist', author:"Paulo Coelho",type:"Social"},
    {img: img1, title:'The Alchemist', author:"Paulo Coelho",type:"Social"},
    {img: img2, title:'The Alchemist', author:"Paulo Coelho",type:"Social"},
    {img: img3, title:'The Alchemist', author:"Paulo Coelho",type:"Social"}
    
]

const  Latest = [
    {img:new1,title:'Vedanti: ek Aghori Prem Katha'},
    {img:new5,title:'Husn'},
    {img:new3,title:'Life Beyond Complication'},
    {img:new4,title:'Aspect of Feminism'},
    {img:new2,title:'The notorious Couple'},
    {img:new6,title:'Tally and Advance Accounting'},
    {img:new7,title:'Are O Zindagi'},
    {img:new8,title:'Pankaj: Shali Rut Ka Safar'},


]


function HomeContent() {
  return (
    <div className=' flex'>
    {/* left side */}
        <div className='left-side box-border relative top-14 flex-wrap gap-6 w-[70%] p-4 '>
        <BookCard Books={Books}/>
         
        </div>
        

    {/* right side */}
    <div className='latest w-[30%] border border-l-600 flex flex-wrap justify-around gap-4'>
        <h1 className=' font-serif text-4xl text-center  m-8 animate-bounce '>Hot New Releases</h1>
            
            {
                Latest.map((book,index)=>(
                    <div key={index} >
                        <div className='h-74 w-48  font-serif  flex flex-col justify-center items-center text-center animate-pulse'>

                        <img src={book.img} alt='' 
                            className='h-56 '
                        />
                        <name className='text-[14px]'>{book.title}</name>
                        </div>
                    </div>
                ))
            }



       

    </div>
    </div>
  )
}

export default HomeContent