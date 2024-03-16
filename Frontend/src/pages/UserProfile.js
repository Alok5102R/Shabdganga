import React, { useState, useEffect } from 'react';
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
    const [csrfToken, setCsrfToken] = useState('');

    useEffect(() => {
        const fetchCsrfToken = async () => {
            try {
                const response = await fetch('http://127.0.0.1:8000/books/api/userprofileapi/');
                if (response.ok) {
                    const data = await response.json();
                    setCsrfToken(data.csrfToken);
                } else {
                    console.error('Failed to fetch CSRF token');
                }
            } catch (error) {
                console.error('Error:', error);
            }
        };
        fetchCsrfToken();
    }, []);

    const handleEditClick = () => {
        setIsEditing(true);
    };
    const handleSaveClick = async () => {
        try {
            const response = await fetch('http://127.0.0.1:8000/books/api/userprofileapi/2/', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRFToken': csrfToken,
                },
                body: JSON.stringify({
                    username: newUsername,
                    email: newEmail,
                    fullname: newFullName,
                    country: newCountry,
                    gender: newGender
                }),
            });

            if (response.ok) {
                setIsEditing(false);
                window.alert('Profile updated');
            } else {
                console.error('Failed to update user profile');
                window.alert('Failed to update user profile');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred while updating user profile');
        }
    };

    const handleCancelClick = () => {
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
        setSelectedAvatar(img);
        setIsModalOpen(false);
    };

    return (
        <div className='profile flex justify-around'>

            {/* left side */}
            <div className='details w-[550px] p-6 font-serif'>
                {isEditing ? (
                    <div>
                        <label className="block mb-2">
                            Full Name:
                            <input className="form-input border-2 mt-1 block w-[50%]" type="text" value={newFullName} onChange={handleChangeFullName} />
                        </label>
                        <label className="block mb-2">
                            Username:
                            <input className="form-input border-2 mt-1 block w-[50%]" type="text" value={newUsername} onChange={handleChangeUsername} />
                        </label>
                        <label className="block mb-2">
                            Email:
                            <input className="form-input mt-1 block border-2 w-[50%]" type="email" value={newEmail} onChange={handleChangeEmail} />
                        </label>
                        <label className="block mb-2">
                            Country:
                            <input className="form-input mt-1 block border-2 w-[50%]" type="text" value={newCountry} onChange={handleChangeCountry} />
                        </label>
                        <label className="block mb-2">
                            Gender:
                            <select className="form-select mt-1 block border-2 w-[50%]" value={newGender} onChange={handleChangeGender}>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select>
                        </label>
                        <div className="flex gap-2 pt-4">
                            <button className="bg-blue-500 text-white px-4 py-2 mr-2 rounded hover:bg-blue-600" onClick={handleSaveClick}>Save</button>
                            <button className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400" onClick={handleCancelClick}>Cancel</button>
                        </div>
                    </div>
                ) : (
                    <div className='flex flex-col gap-10'>
                        <p><strong>Full Name:</strong> {fullname}</p>
                        <p><strong>Username:</strong> {username}</p>
                        <p><strong>Email:</strong> {email}</p>
                        <p><strong>Country:</strong> {country}</p>
                        <p><strong>Gender:</strong> {gender}</p>
                        <p><strong>Account Type:</strong> {actype}</p>
                        <p><strong>Timestamp:</strong> {date}</p>
                        <button className="bg-blue-500  text-white px-4 w-36 py-2 rounded hover:bg-blue-600" onClick={handleEditClick}>Edit Details</button>

                    </div>
                )}
            </div>

            {/* right side */}
            <div className='profile-btns flex flex-col font-serif text-1xl gap-6 mt-8'>
                <div className='w-[180px] h-[200px] text-center'>
                    {selectedAvatar && <img src={selectedAvatar} alt="Selected Avatar" className='w-[180px] h-[190px] border-gray-500 border-2' />}
                </div>
                <button className='rounded text-black-700 bg-gray-400' onClick={() => setIsModalOpen(true)}>Choose Avatar</button>
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" onClick={() => navigate("/UploadBook")}>Publish New Book</button>
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" onClick={() => navigate("/ManageBooks")}>Manage Books</button>
                <button className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-blue-600">Logout</button>
            </div>

            {isModalOpen && <Avatar setIsModalOpen={setIsModalOpen} handleImageSelect={handleImageSelect} />}
        </div>
    );
}

export default UserProfile;
