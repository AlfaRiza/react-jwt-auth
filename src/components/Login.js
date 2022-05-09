import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useCookies } from 'react-cookie';
import jwtDecode from 'jwt-decode';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [msg, setMsg] = useState('');
    const [cookies, setCookie] = useCookies(['user']);

    const history = useNavigate();

    const Auth = async (e) => {
        e.preventDefault();

        try {
            let login =  await axios.post('http://localhost:8000/login', {
                email: email,
                password: password,
            });
            console.log(login.data.refresh_token);
            setCookie('refresh_token', login.data.refresh_token)
            setCookie('access_token', login.data.access_token)
            console.log(jwtDecode(login.data.access_token).exp);
            setCookie('expired_token', jwtDecode(login.data.access_token).exp);
            history('/dashboard')
        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg);
            }
        }
    }
    return (
        <div className="Login flex items-center justify-center min-h-screen bg-sky-200">
            <div className="px-8 py-6 mt-4 text-left bg-white shadow-lg w-2/5 rounded-lg">
                <h3 className="text-2xl font-bold text-center">Login to your account</h3>
                <p className='py-3 text-center text-red-500'>{msg}</p>
                <form onSubmit={Auth} action="">
                    <div className="mt-4">
                        <label className="block" htmlFor="email">Email</label>
                        <input type="text" required placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-sky-300" />
                    </div>
                    <div className="mt-4">
                        <label className="block" htmlFor="password">Password</label>
                        <input type="password" required placeholder="********" value={password} onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-sky-300" />
                    </div>
                    <div className="flex items-baseline justify-center">
                        <button className="px-8 w-full py-2 mt-4 text-white bg-sky-400 rounded-lg hover:bg-sky-500">Login</button>
                    </div>
                    <div className="flex items-baseline justify-center">
                        <a href="/register" className="text-xs pt-3 text-sky-500 underline-offset-0 text-decoration-line: underline hover:text-sky-600">Don't have account yet?</a>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login
