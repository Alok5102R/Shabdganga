import React, { useState } from 'react';
import img from '../images/img-signup.png';
import { Form } from 'react-router-dom';

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
    return null; // Or handle the error in a different way
  });
}
var currentLoggedInUser = await callacv();

function SignIn() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [passwordMatch, setPasswordMatch] = useState(true);
  const [csrfToken, setCsrfToken] = useState(''); // Assuming you have CSRF token available

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    if (confirmPassword !== '') {
      setPasswordMatch(e.target.value === confirmPassword);
    }
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    setPasswordMatch(password === e.target.value);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('username',e.target.username.value);
    formData.append('password',e.target.password.value);
    formData.append('csrfmiddlewaretoken','VLmgSG13Tc4QODT69E9aN2QSpqIxhCJu');
    console.log(e.target.username.value);
    console.log(formData);

    try {
      const response = await fetch('http://127.0.0.1:8000/books/login', {
        method: 'POST',
        headers: {
          // 'Content-Type': 'application/json',
          'X-CSRFToken': 'VLmgSG13Tc4QODT69E9aN2QSpqIxhCJu',
        },
        body: formData,
        credentials: 'include'
      });

      if (response.ok) {
        window.alert('Signed In');
        response.json().then(data => {
          const jwtToken = data.jwt;
          document.cookie = `jwt=${jwtToken}; path=/;`;
        }).catch(error => {
          console.error('Error parsing response as JSON:', error);
        });
      } else {
        window.alert('Sig in failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className='flex flex-row justify-between items-center bg-gray-200'>
      {/* left side --> Form */}
      <div className='relative w-[30%] p-6 m-20 mt-12'>
        <form onSubmit={handleSubmit}>
          <h2 className="text-5xl font-semibold font-serif mb-20">Sign In</h2>
          <div className="mb-4">
            <input type="text" id="username" name="username" className="border-gray-300 border-b-4 rounded-md w-full px-3 py-4 focus:border-b-4 focus:border-blue-500 outline-none" placeholder="Username" required/>
          </div>
          <div className="mb-4">
            <div className="relative">
              <input type={showPassword ? 'text' : 'password'} id="password" name="password" value={password} onChange={handlePasswordChange} className="border-gray-300 border-b-4 rounded-md w-full px-4 py-3 focus:border-b-4 focus:border-blue-500 outline-none" placeholder="Password" required minLength={8}/>
              <button type="button" onClick={togglePasswordVisibility} className="absolute right-0 top-1/2 transform -translate-y-1/2 mr-3">
                {showPassword ? <i className="far fa-eye"></i> : <i className="far fa-eye-slash"></i>}
              </button>
            </div>
          </div>
          <div className="mb-4">
            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors">Sign In</button>
          </div>
        </form>
      </div>

      <div className='border w-0 h-80 border-gray-300'></div>
      
      {/* right side --> Image*/}
      <div className='relative m-20'>
        <img src={img} alt="" className='h-[500px] w-[500px]'/>
      </div>
    </div>
  );
}

export default SignIn;
