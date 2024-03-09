import React, { useEffect, useState } from 'react';
import Nav from './components/Nav';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import SignUp from './pages/SignUp';
import UploadBook from './pages/UploadBook';
import UserProfile from './pages/UserProfile';
import FAQ from './pages/FAQ';
import ManageBooks from './pages/ManageBooks';
import ViewBook from './pages/ViewBook';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userData, setUserData] = useState(null);

  async function fetchData() {
    try {
      const res = await fetch('http://127.0.0.1:8000/books/api/userprofileapi/');
      const apiData = await res.json();

      const username = 'ishwarsg';
      const user = apiData.find(profile => profile.user.username === username);
      if (user) {
        setUserData(user);
      }

    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchData();
  }, []); 

  useEffect(() => {
    if (userData) {
      const { user, fullName, country, gender, accountType } = userData;
      console.log(user.username);
      console.log(user.email);
      console.log(fullName);
      console.log(country);
      console.log(gender);
      console.log(user.date_joined);
      console.log(accountType);
    }
  }, [userData]);

  return (
    <div>
      {/* Conditional rendering of Modal */}
      {isModalOpen && (
        <div>
          <div className='modal'>
            <form className='flex flex-col gap-12 '>
              <h1 className='text-center text-4xl font-serif'>Sign in</h1>
              <div className='justify-center items-center text-black flex flex-col  text-center'>
                <input type='text' className='mb-4 px-4 py-3 w-[300px] outline-none rounded focus:border-b-2 focus:border-blue-700' placeholder="Username" /><br />
                <input type='password' className='mb-4 px-4 py-3  w-[300px] outline-none rounded focus:border-b-2 focus:border-blue-700' placeholder="Password" /><br />
                <button type='submit' onClick={() => setIsModalOpen(false)} className='p-2 w-[100px] text-white bg-blue-900 hover:bg-blue-800 rounded'>Submit</button>
              </div>
            </form>
          </div>
          <div className='overlay' onClick={() => setIsModalOpen(false)}></div>
        </div>
      )}

      {/* NAVBAR buttons */}
      <Nav setIsModalOpen={setIsModalOpen} username={userData ? userData.user.username : null} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/UploadBooks" element={<UploadBook />} />
        <Route path="/UserProfile" element={<UserProfile username={userData ? userData.user.username : null} email={userData ? userData.user.email : null} gender={userData ? userData.gender : null} date={userData ? userData.user.date_joined : null} actype={userData ? userData.accountType : null} fullname={userData ? userData.fullName : null} country={userData ? userData.country : null} />} />
        <Route path="/FAQ" element={<FAQ />} />
        <Route path="/UploadBook" element={<UploadBook />} />
        <Route path="/ManageBooks" element={<ManageBooks />} />
        <Route path="/ViewBook" element={<ViewBook />} />
      </Routes>
    </div>
  );
}

export default App;
