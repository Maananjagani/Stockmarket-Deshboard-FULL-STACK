import React, { useState } from 'react';
import Header from '../Header/Header';
import './login.css'; // Adjust the path based on your project structure
import axios from 'axios';

function Login() {
    const initialValue = '';
    const [userState, setUserState] = useState(initialValue);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState(''); // Fix here

    const handleUserStateChange = (newValue) => {
        setUserState(newValue);
    }; // Add closing brace here

    function handleSubmit(event) {
        event.preventDefault();
        axios.post('http://localhost:8081/login', { email, password })
            .then(res => console.log(res))
            .catch(err => console.log(err));
    }

    return (
        <div>
            <Header /> {/* Include the Header component */}
            <div>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                            onChange={e => setEmail(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1"
                            onChange={e => setPassword(e.target.value)} />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default Login;
