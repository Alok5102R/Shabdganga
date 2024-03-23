import React, { useEffect, useState } from 'react';
import Nav from './components/Nav';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import UploadBook from './pages/UploadBook';
import UserProfile from './pages/UserProfile';
import FAQ from './pages/FAQ';
import ManageBooks from './pages/ManageBooks';
import ViewBook from './pages/ViewBook';

// Get JWT Token from cookie
const getJwtTokenFromCookie = () => {
  const cookies = document.cookie.split('; ');
  for (const cookie of cookies) {
      const [name, value] = cookie.split('=');
      if (name === 'jwt') { 
          return value;
      }
  }
  
  return null;
 
};
const jwt = getJwtTokenFromCookie();
console.log(jwt)

// Check current logged in user
function callacv() {
  var formnew = new FormData();
  formnew.append('jwt', jwt);
  return fetch('http://127.0.0.1:8000/books/user', {
    method: 'POST',
    body: formnew,
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    currentLoggedInUser = data.username;
    return data.username;
  })
  .catch(error => {
    console.error('Error:', error);
    return null;
  });
}
var currentLoggedInUser = await callacv();

function App() {
  // const [isModalOpen, setIsModalOpen] = useState(false);
  const [userData, setUserData] = useState(null);

  async function fetchData() {
    var formData = new FormData();
    console.log(currentLoggedInUser);
    formData.append('username',String(currentLoggedInUser));
    try {
      const res = await fetch('http://127.0.0.1:8000/books/userdetail',{
        method: 'POST',
        body: formData,
      });
      const apiData = await res.json();
      setUserData(apiData);
      console.log(apiData);

      // const user = apiData.find(profile => profile.user.username === username);
      // if (apiData) {
      // }

    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchData();
  }, []); 

  useEffect(() => {
    if (userData) {
      const { username, email, fullName, country, gender, date_joined, accountType } = userData;
      console.log(username);
      console.log(email);
      console.log(fullName);
      console.log(country);
      console.log(gender);
      console.log(date_joined);
      console.log(accountType);
    }
  }, [userData]);


  return (
    <div>
      {/* Conditional rendering of Modal */}
      {/* {isModalOpen && (
        <div>
          <div className='modal'>
            <form className='flex flex-col gap-12 ' onSubmit={handleSubmit}>
              <h1 className='text-center text-4xl font-serif'>Sign in</h1>
              <div className='justify-center items-center text-black flex flex-col  text-center'>
                <input type='text' className='mb-4 px-4 py-3 w-[300px] outline-none rounded focus:border-b-2 focus:border-blue-700' placeholder="Username" name="username"/><br />
                <input type='password' className='mb-4 px-4 py-3  w-[300px] outline-none rounded focus:border-b-2 focus:border-blue-700' placeholder="Password" name="password" /><br />
                <button type='submit' onClick={() => setIsModalOpen(false)} className='p-2 w-[100px] text-white bg-blue-900 hover:bg-blue-800 rounded'>Submit</button>
              </div>
            </form>
          </div>
          <div className='overlay' onClick={() => setIsModalOpen(false)}></div>
        </div>
      )} */}

      {/* NAVBAR buttons */}
      {/* <Nav setIsModalOpen={setIsModalOpen} username={userData ? userData.user.username : null} /> */}
      <Nav username={userData ? userData.username : null} jwt={jwt}/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/UploadBooks" element={<UploadBook />} />
        <Route path="/UserProfile" element={<UserProfile username={userData ? userData.username : null} email={userData ? userData.email : null} gender={userData ? userData.gender : null} date={userData ? userData.timeStamp : null} actype={userData ? userData.accountType : null} fullname={userData ? userData.fullName : null} country={userData ? userData.country : null} />} />
        <Route path="/FAQ" element={<FAQ />} />
        <Route path="/UploadBook" element={<UploadBook />} />
        <Route path="/ManageBooks" element={<ManageBooks />} />
        <Route path="/ViewBook" element={<ViewBook />} />
      </Routes>
    </div>
  );
}

export default App;
