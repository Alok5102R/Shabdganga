import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function UserProfile({ username, email, firstName, lastName, mobileNumber, gender }) {
  const [newUsername, setNewUsername] = useState(username);
  const [newEmail, setNewEmail] = useState(email);
  const [newFirstName, setNewFirstName] = useState(firstName);
  const [newLastName, setNewLastName] = useState(lastName);
  const [newMobileNumber, setNewMobileNumber] = useState(mobileNumber);
  const [newGender, setNewGender] = useState(gender);
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    // Here you can add your logic to save the updated information, e.g., make an API call
    // After saving, you can set isEditing to false to exit the editing mode
    setIsEditing(false);
  };

  const handleCancelClick = () => {
    // If the user cancels editing, revert changes to the original values
    setNewUsername(username);
    setNewEmail(email);
    setNewFirstName(firstName);
    setNewLastName(lastName);
    setNewMobileNumber(mobileNumber);
    setNewGender(gender);
    setIsEditing(false);
  };

  const handleChangeUsername = (event) => {
    setNewUsername(event.target.value);
  };

  const handleChangeEmail = (event) => {
    setNewEmail(event.target.value);
  };

  const handleChangeFirstName = (event) => {
    setNewFirstName(event.target.value);
  };

  const handleChangeLastName = (event) => {
    setNewLastName(event.target.value);
  };

  const handleChangeMobileNumber = (event) => {
    setNewMobileNumber(event.target.value);
  };

  const handleChangeGender = (event) => {
    setNewGender(event.target.value);
  };



  const navigate = useNavigate()
  return (
    <div className='flex justify-around m-16'>


            {/* left side- user details */}
            <div className=' h-[650px] w-[550px] p-8 text-2xl font-serif'>
            {isEditing ? (
        <div>
        <label className="block mb-2">
            Full Name:
            <input className="form-input border-2 mt-1 block " type="text" value={newFirstName} onChange={handleChangeFirstName} />
          </label>
          {/* <label className="block mb-2">
            Last Name:
            <input className="form-input border-2 mt-1 block " type="text" value={newLastName} onChange={handleChangeLastName} />
          </label> */}
          <label className="block mb-2">
            Username:
            <input className="form-input border-2 mt-1 block " type="text" value={newUsername} onChange={handleChangeUsername} />
          </label>
          <label className="block mb-2">
            Email:
            <input className="form-input mt-1 block border-2" type="email" value={newEmail} onChange={handleChangeEmail} />
          </label>
          
          <label className="block mb-2">
            Mobile Number:
            <input className="form-input mt-1 block border-2" type="tel" value={newMobileNumber} onChange={handleChangeMobileNumber} />
          </label>
          <label className="block mb-2">
            Gender:
            <select className="form-select mt-1 block border-2" value={newGender} onChange={handleChangeGender}>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </label>
          <button className="bg-blue-500 text-white px-4 py-2 mr-2 rounded hover:bg-blue-600" onClick={handleSaveClick}>Save</button>
          <button className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400" onClick={handleCancelClick}>Cancel</button>
        </div>
      ) : (
        <div className='flex flex-col gap-12'>
          <p><strong>First Name:</strong> {firstName}</p>
          <p><strong>Last Name:</strong> {lastName}</p>
          <p><strong>Username:</strong> {username}</p>
          <p><strong>Email:</strong> {email}</p>
          
          <p><strong>Mobile Number:</strong> {mobileNumber}</p>
          <p><strong>Gender:</strong> {gender}</p>
        </div>
      )}



            </div>

      {/* right side - */}
            <div className='flex flex-col   text-2xl gap-8 mt-24'>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" onClick={handleEditClick}>Edit Details</button>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" onClick={()=>navigate("/UploadBook")}>Publish New Book</button> 
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Manage Books</button> 
            <button className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-blue-600">Logout</button>   
            </div>
    </div>
  );
}

export default UserProfile;
