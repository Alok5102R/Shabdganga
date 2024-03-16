import React, { useState } from 'react';
import img from '../images/img-signup.png';

function SignUp() {
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
    const formData = {
      username: e.target.username.value,
      email: e.target.email.value,
      password: e.target.password.value,
      userType: document.querySelector('input[name="userType"]:checked').value
    };

    // Example: sending data using fetch with CSRF token
    try {
      const response = await fetch('http://127.0.0.1:8000/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRFToken': csrfToken,
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Success - do something here (e.g., redirect to a success page)
        window.alert('Signed up');
        console.log('Signup successful');
        // Optionally, you can reset the form fields here
      } else {
        // Handle errors here
        console.error('Signup failed');
        window.alert('Signed up failed');
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
          <h2 className="text-5xl font-semibold font-serif mb-20">Sign Up</h2>
          <div className="mb-4 flex gap-6">
            <div>
              <input type="radio" id="author" name="userType" required value="author"/>
              <label htmlFor="author">Author</label>
            </div>
            <div>
              <input type="radio" id="reader" name="userType" required value="reader"/>
              <label htmlFor="reader">Reader</label>
            </div>
          </div>
          <div className="mb-4">
            <input type="text" id="username" name="username" className="border-gray-300 border-b-4 rounded-md w-full px-3 py-4 focus:border-b-4 focus:border-blue-500 outline-none" placeholder="Username" required/>
          </div>
          <div className="mb-4">
            <input type="email" id="email" name="email" className="border-gray-300 border-b-4 rounded-md w-full px-4 py-3 focus:border-b-4 focus:border-blue-500 outline-none" placeholder="Email" required/>
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
            <input type={showPassword ? 'text' : 'password'} id="cpassword" name="cpassword" value={confirmPassword} onChange={handleConfirmPasswordChange} className="border-gray-300 border-b-4 rounded-md w-full px-4 py-3 focus:border-b-4 focus:border-blue-500 outline-none" placeholder="Confirm Password" required minLength={8}/>
          </div>
          {!passwordMatch && confirmPassword !== '' && <p className="text-red-500">Passwords do not match</p>}
          <div className="mb-4">
            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors">Sign Up</button>
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

export default SignUp;
