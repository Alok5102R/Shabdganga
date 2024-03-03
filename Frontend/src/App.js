import React, { useState } from 'react';
import Nav from './components/Nav';
import Home from './pages/Home';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // const Modal = () => {
  //   setIsModalOpen(true ?  isModalOpen : false);
  // };

  return (
    <div>
      {isModalOpen && (
       <div>
       <div className='modal'>
          <form className='flex flex-col gap-12 '>
            <h1 className='text-center text-4xl font-serif'>Sign in</h1>
            <div className='justify-center items-center text-black flex flex-col  text-center'>
              <input type='text' className='mb-4 px-4 py-3 w-[300px] outline-none rounded focus:border-b-2 focus:border-blue-700' placeholder="Username" /><br />
              <input type='password' className='mb-4 px-4 py-3  w-[300px] outline-none rounded focus:border-b-2 focus:border-blue-700' placeholder="Password" /><br />
              <button type='submit' onClick={()=>setIsModalOpen(false)} className='p-2 w-[100px] text-white bg-blue-900 hover:bg-blue-800 rounded'>Submit</button>
            </div>
          </form>
        </div>
        <div className='overlay' onClick={()=>setIsModalOpen(false)}></div>
       </div>
        
      )
      }
      
      

      <Nav setIsModalOpen={setIsModalOpen} />

      <Home />
    </div>
  );
}

export default App;
