import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Avatar from '../components/Avatar';
import userimg from '../images/dummy-img.png';

function UserProfile({ username, email, fullname, country, gender, actype, date }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedAvatar, setSelectedAvatar] = useState(userimg); 
    const [isEditing, setIsEditing] = useState(false);
    const [newUsername, setNewUsername] = useState(username);
    const [newEmail, setNewEmail] = useState(email);
    const [newFullName, setNewFullName] = useState(fullname);
    const [newCountry, setNewCountry] = useState(country);
    const [newGender, setNewGender] = useState(gender);

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
        setNewFullName(fullname);
        setNewCountry(country);
        setNewGender(gender);
        setIsEditing(false);
    };

    const handleChangeUsername = (event) => {
        setNewUsername(event.target.value);
    };

    const handleChangeEmail = (event) => {
        setNewEmail(event.target.value);
    };

    const handleChangeFullName = (event) => {
        setNewFullName(event.target.value);
    };

    const handleChangeCountry = (event) => {
        setNewCountry(event.target.value);
    };

    const handleChangeGender = (event) => {
        setNewGender(event.target.value);
    };

    const navigate = useNavigate();

    const handleImageSelect = (img) => {
        setSelectedAvatar(img); // Set selected avatar in state
        setIsModalOpen(false); // Close the modal after selecting an image
    };

    return (
        <div className='flex  justify-around'>

        {/* left side */}
            <div className=' h-[650px] w-[550px] p-8 text-2xl font-serif'>
                {isEditing ? (
                    <div>
                        <label className="block mb-2">
                            Full Name:
                            <input className="form-input border-2 mt-1 block " type="text" value={newFullName} onChange={handleChangeFullName} />
                        </label>
                        <label className="block mb-2">
                            Username:
                            <input className="form-input border-2 mt-1 block " type="text" value={newUsername} onChange={handleChangeUsername} />
                        </label>
                        <label className="block mb-2">
                            Email:
                            <input className="form-input mt-1 block border-2" type="email" value={newEmail} onChange={handleChangeEmail} />
                        </label>
                        <label className="block mb-2">
                            Country:
                            <input className="form-input mt-1 block border-2" type="text" value={newCountry} onChange={handleChangeCountry} />
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
                        <p><strong>Full Name:</strong> {fullname}</p>
                        <p><strong>Username:</strong> {username}</p>
                        <p><strong>Email:</strong> {email}</p>
                        <p><strong>Country:</strong> {country}</p>
                        <p><strong>Gender:</strong> {gender}</p>
                        <p><strong>Account Type:</strong> {actype}</p>
                        <p><strong>Timestamp:</strong> {date}</p>
                    </div>
                )}
            </div>


                    {/* right side */}
            <div className='flex flex-col font-serif  text-1xl gap-6 mt-8 '>
                <div className=' w-[180px] h-[200px] text-center '>
                    {selectedAvatar && <img src={selectedAvatar} alt="Selected Avatar" className=' w-[180px] h-[190px] border-gray-500 border-2' />}
                </div>
                <button className='rounded text-black-700  bg-gray-400' onClick={() => setIsModalOpen(true)}>Choose Avatar</button>
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" onClick={handleEditClick}>Edit Details</button>
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" onClick={() => navigate("/UploadBook")}>Publish New Book</button>
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" onClick={() => navigate("/ManageBooks")}>Manage Books</button>
                <button className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-blue-600">Logout</button>
            </div>

            {isModalOpen && <Avatar setIsModalOpen={setIsModalOpen} handleImageSelect={handleImageSelect} />}
        </div>
    );
}

export default UserProfile;
