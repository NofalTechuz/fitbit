import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

const Register = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/auth/register`, {
                email,
                password
            });
            console.log(response.data);
            navigate('/admin/login');
        } catch (error) {
            console.error(error);
        }
        
    };
  return (
    <>
        <h1>Register</h1>
        <form>
            <div>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" onChange={(e)=> setPassword(e.target.value)} />
            </div>
            <button onClick={handleSubmit}>Register</button>
        </form>
    </>
  )
}

export default Register