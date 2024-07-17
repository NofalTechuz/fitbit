import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/auth/login`, {
                email,
                password
            }, {
                withCredentials: true // Include credentials
            });
            console.log(response.data);
            navigate('/admin/home');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
            <h1>Login</h1>
            <form>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button onClick={handleSubmit}>Login</button>
            </form>
        </>
    );
}

export default Login;
