import React, { useEffect, useState } from 'react';
import Nav from './components/Nav';
import Home from './pages/Home';
import { Route,Routes,} from 'react-router-dom'
import SignUp from './pages/SignUp';
import UploadBook from './pages/UploadBook';
import UserProfile from './pages/UserProfile';
import FAQ from './pages/FAQ';



function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [data, setData] = useState([]);

      async function fetchData() {
        try {
          const res = await fetch('http://127.0.0.1:8000/books/api/userapi/	');
          const apiData = await res.json();
          setData(apiData);

        } catch (err) {
          console.log(err);
        }
      }

      useEffect(() => {
        fetchData();
      }, []); 

      useEffect(() => {
        console.log(data); 
      }, [data]); 

      const username = data.map((item)=> item.username)
      



  
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
      
      

      <Nav setIsModalOpen={setIsModalOpen} username={username} />

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/SignUp" element={<SignUp/>} />
        <Route path="/UploadBooks" element={<UploadBook/>} />
        <Route path="/UserProfile" element={<UserProfile/>} />
        <Route path="/FAQ" element={<FAQ/>} />
        <Route path="/UploadBook" element={<UploadBook/>} />

    </Routes>
  
     
    </div>
  );
}

export default App;
