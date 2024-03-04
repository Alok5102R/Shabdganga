import React from 'react';
import img from '../images/book4.jpeg'
const dummyBook = {
  title: 'The Alchemist',
  author: 'Paulo Coelho',
  type: 'Social',
 
  summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod  temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi  ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laboru  ',
  published: 'September 1, 1988',
  pages: 197
};

function ViewBook() {
  return (
    <div className="container mx-auto px-4 py-8 flex">
      <div className="w-1/3">
        <img src={img} alt={dummyBook.title} className="w-full h-auto rounded-lg shadow-md" />
      </div>
      <div className="w-2/3 ml-8">
        <h1 className="text-3xl font-semibold mb-4">{dummyBook.title}</h1>
        <div className="flex justify-between items-center mb-4">
          <p className="text-gray-600">{dummyBook.author}</p>
          <p className="text-gray-600">{dummyBook.type}</p>
        </div>
        <div className="text-lg text-gray-700 leading-relaxed mb-8">
          {dummyBook.summary}
        </div>
        <div className="flex justify-between items-center">
          <p className="text-gray-600">{dummyBook.published}</p>
          <p className="text-gray-600">{dummyBook.pages} pages</p>
        </div>
      </div>
    </div>
  );
}

export default ViewBook;
