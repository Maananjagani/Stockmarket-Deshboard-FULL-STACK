import React, { useState } from 'react';
import Header from '../Header/Header';
import './signup.css';
import axios from 'axios';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password !== repeatPassword) {
            setError('Passwords do not match');
            return;
        }

        try {
            const response = await axios.post('http://localhost/stock/shtock/src/components/Header/signup.php', { email, password });
            console.log(response.data); // Assuming response contains relevant data
            // Handle successful signup (e.g., redirect to login page)
        } catch (error) {
            setError('Signup failed. Please try again.');
            console.error('Signup failed:', error);
        }
    };

    return (
        <div>
            <Header />
            <div className="container">
                <form onSubmit={handleSubmit} style={{ border: "1px solid #ccc" }}>
                    <div>
                        <h1>Sign Up</h1>
                        {error && <p style={{ color: 'red' }}>{error}</p>}
                        <p>Please fill in this form to create an account.</p>
                        <hr />

                        <label htmlFor="email"><b>Email</b></label>
                        <input type="text" placeholder="Enter Email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

                        <label htmlFor="psw"><b>Password</b></label>
                        <input type="password" placeholder="Enter Password" name="psw" value={password} onChange={(e) => setPassword(e.target.value)} required />

                        <label htmlFor="psw-repeat"><b>Repeat Password</b></label>
                        <input type="password" placeholder="Repeat Password" name="psw-repeat" value={repeatPassword} onChange={(e) => setRepeatPassword(e.target.value)} required />

                        <label>
                            <input type="checkbox" checked="checked" name="remember" style={{ marginBottom: "15px" }} /> Remember me
                        </label>

                        <p>By creating an account you agree to our <a href="#" style={{ color: "dodgerblue" }}>Terms & Privacy</a>.</p>

                        <div className="clearfix">
                            <button type="button" className="cancelbtn">Cancel</button>
                            <button type="submit" className="signupbtn">Sign Up</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Signup;
