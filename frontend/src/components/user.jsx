import React from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';
import '../App.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const AddUser = () => {
    const [name, setName] = useState('');
    const [contact, setContact] = useState('');
    const [email, setEmail] = useState('admin');
    const navigate = useNavigate();

    const handleSubmitForm = (e) => {
        e.preventDefault();
        console.log({ name, contact, email }); 
        axios.post('http://localhost:3001/user/addUser', { name, contact, email })
        .then(res => {
            if(res.data.registered){
                navigate('/main')
            }
            // if (res.data.token) {
            //     navigate('/main');
            // } else {
            //     console.error('Invalid login response:', res.data);
            // }
        })
        .catch(err => {
            console.error('Error:', err);
            // if (err.response && err.response.data) {
            //     console.error('Error response data:', err.response.data);
            // }
        });
    }

    return (
        <div className='loginpage'>
            <div className='lContainer'>
                <h2>Add User Details</h2>
                <br/>
                <div className='form-group'>
                    <label htmlFor="name">Name:</label>
                    <input type="text" placeholder="Enter Name" onChange={(e) => setName(e.target.value)}/>
                </div>
                <div className='form-group'>
                    <label htmlFor="contact">Contact:</label>
                    <input type="text" placeholder="Enter Contact" onChange={(e) => setContact(e.target.value)}/>
                </div>
                <div className='form-group'>
                    <label htmlFor="email">Email:</label>
                    <input type="email" placeholder="Enter Email" onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <br/>
                <button type= "submit" className='login-btn'  onClick={handleSubmitForm}>Add User</button>
            </div>
        </div>
    );
}

export default AddUser;
