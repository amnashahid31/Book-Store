// import React, { useState } from 'react';
// import {Link} from 'react-router-dom';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import '../App.css';

// const Login = () => {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const [role, setRole] = useState('admin');
//     const navigate = useNavigate();

//     // function for login
//     const handleSubmitForm = () => {
//         console.log({ username, password, role }); // Check if values are correct
//         axios.post('http://localhost:3001/auth/login', { username, password, role })
//         .then(res => {
//             if(res.data.login && res.data.role === 'admin'){
//                navigate('/main');
//             }
//         })
//         .catch(err => console.error('Error:', err.response.data));
//     }
 
//     return (
//         <div className='loginpage'>
//             <div className='lContainer'>
//                 <h2>Login</h2>
//                 <br/>
//                 <div className='form-group'>
//                     <label htmlFor="name">Username:</label>
//                     <input type="text" placeholder="Enter Username" onChange={(e) => setUsername(e.target.value)}></input>
//                 </div>
//                 <div className='form-group'>
//                     <label htmlFor="password">Password:</label>
//                     <input type="password" placeholder="Enter Password" onChange={(e) => setPassword(e.target.value)}></input>
//                 </div>
//                 <div className='form-group'>
//                     <label htmlFor='role'>Role:</label>
//                     <select name='role' id='role' onChange={(e) => setRole(e.target.value)}>
//                         <option value="***">Select a role</option>
//                         <option value="admin">Administrator</option>
//                         <option value="user">User</option>
//                     </select>
//                 </div>
//                 <br/>
//                 <Link to="/register" className='center-text'>No account? Click here to register.</Link>
//                 <br/><br/>
//                 <button className='login-btn' onClick={handleSubmitForm}>Login</button>
//                 </div>
//         </div>
//     )
// }

// export default Login;


import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('admin');
    const navigate = useNavigate();

    // function for login
    const handleSubmitForm = () => {
        console.log({ username, password, role }); // Check if values are correct
        axios.post('http://localhost:3001/auth/login', { username, password, role })
        .then(res => {
            console.log(res.data); // Log response data to check its structure
            if (res.data.token) {
                navigate('/main');
            } else {
                console.error('Invalid login response:', res.data);
            }
        })
        .catch(err => {
            console.error('Error:', err);
            if (err.response && err.response.data) {
                console.error('Error response data:', err.response.data);
            }
        });
    }

    return (
        <div className='loginpage'>
            <div className='lContainer'>
                <h2>Login</h2>
                <br/>
                <div className='form-group'>
                    <label htmlFor="name">Username:</label>
                    <input type="text" placeholder="Enter Username" onChange={(e) => setUsername(e.target.value)}></input>
                </div>
                <div className='form-group'>
                    <label htmlFor="password">Password:</label>
                    <input type="password" placeholder="Enter Password" onChange={(e) => setPassword(e.target.value)}></input>
                </div>
                <div className='form-group'>
                    <label htmlFor='role'>Role:</label>
                    <select name='role' id='role' onChange={(e) => setRole(e.target.value)}>
                        <option value="***">Select a role</option>
                        <option value="admin">Administrator</option>
                        <option value="user">User</option>
                    </select>
                </div>
                <br/>
                <Link to="/register" className='center-text'>No account? Click here to register.</Link>
                <br/><br/>
                <button className='login-btn' onClick={handleSubmitForm}>Login</button>
            </div>
        </div>
    )
}

export default Login;
