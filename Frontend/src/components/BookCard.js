import React from 'react'

function BookCard({ Books }) {
  return (
    <div>
       
       <div className='flex flex-wrap gap-6  font-serif'>
         {Books.map((book, index) => (
                <div key={index}>
                <div className='box-border flex flex-col h-96 w-80  shadow-[0_8px_30px_rgb(0,0,0,0.12)] justify-center items-center transition-transform duration-300 transform hover:scale-110'>
                <img src={book.img} alt="" 
                className='h-64 w-48'
                />
        <div className='book-details flex flex-col mt-4'>
            <name>Title: {book.title}</name>
            <auth>Author: {book.author}</auth>
            <type>Type: {book.type}</type>
           

        </div>
         
        </div> 
                </div>
            ))}
       </div>

    </div>
  )
}

export default BookCard