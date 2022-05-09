import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirm_password, setConfirmPassword] = useState('');
    const [msg, setMsg] = useState('');

    const history = useNavigate();
    const Register = async (e) => {
        e.preventDefault();

        try {
            await axios.post('http://localhost:8000/register', {
                name: name,
                email: email,
                password: password,
                confirm_password: confirm_password,
            });
            history('/')
        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg);
            }
        }
    }

    return (
        <div className="Login flex items-center justify-center min-h-screen bg-sky-200">
            <div className="px-8 py-6 mt-4 text-left bg-white shadow-lg w-2/5 rounded-lg">
                <h3 className="text-2xl font-bold text-center">Create to your account</h3>
                <p className='py-3 text-red-500'>{msg}</p>
                <form onSubmit={Register} action="">
                    <div className="mt-4">
                        <label className="block" htmlFor="name">Name</label>
                        <input type="text" placeholder="your name . . ."
                            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-sky-300" value={name} onChange={e => setName(e.target.value)} />
                    </div>
                    <div className="mt-4">
                        <label className="block" htmlFor="email">Email</label>
                        <input type="text" required placeholder="Email"
                            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-sky-300" value={email} onChange={e => setEmail(e.target.value)} />
                    </div>
                    <div className="mt-4">
                        <label className="block" htmlFor="password">Password</label>
                        <input type="password" required placeholder="********"
                            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-sky-300" value={password} onChange={e => setPassword(e.target.value)} />
                    </div>
                    <div className="mt-4">
                        <label className="block" htmlFor="confirm_password">Confirm Password</label>
                        <input type="password" required placeholder="********" id='confirm_password'
                            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-sky-300" value={confirm_password} onChange={e => setConfirmPassword(e.target.value)} />
                    </div>
                    <div className="flex items-baseline justify-center">
                        <button className="px-8 w-full py-2 mt-4 text-white bg-sky-400 rounded-lg hover:bg-sky-500">Register</button>
                    </div>
                    <div className="flex items-baseline justify-center">
                        <a href="/" className="text-xs pt-3 text-sky-500 underline-offset-0 text-decoration-line: underline hover:text-sky-600">Have account? Login here !</a>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register
