import React, { useState, useEffect } from 'react'
import axios from 'axios'
import jwtDecode from 'jwt-decode'
import { useNavigate } from 'react-router-dom'
import Navbar from './Navbar'

function Dashboard() {
    const history = useNavigate();
    const [name, setName] = useState('');
    const [token, setToken] = useState('');
    const [expired, setExpired] = useState('');
    const [users, setUsers] = useState([]);

    // on mounted
    useEffect(() => {
        refresh_token();
        // getUsers();
        // console.log(getUsers)
    }, [])


    const refresh_token = async () => {
        try {
            const response = await axios.get('http://localhost:8000/token');
            setToken(response.data.access_token);
            const decoded = jwtDecode(response.data.access_token);
            // console.log(decoded.name);
            setName(decoded.name);
            setExpired(decoded.exp)
        } catch (error) {
            if (error.response) {
                // kembali ke login
                history('/');
            }

        }
    }

    const axiosJwt = axios.create();

    axiosJwt.interceptors.request.use(async (config) => {
        const currentDate = new Date();

        if (expired * 1000 < currentDate.getTime()) {
            const response = await axios.get('http://localhost:8000/token');
            config.headers.Authorization = `Bearer ${token}`;

            setToken(response.data.access_token);
            const decoded = jwtDecode(response.data.access_token);
            setName(decoded.name);
            setExpired(decoded.exp)
        }

        return config;
    }, error => {
        return Promise.reject(error);
    })

    const getUsers = async () => {
        const response = await axiosJwt.get('http://localhost:8000/users', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        setUsers(response.data);
        console.log(response.data);

    }

    return (
        <div className='Dashboard'>
            <Navbar />
            <div className="bg-sky-300 ">
                <div className="px-20 py-4 mx-auto lg:flex lg:h-128 lg:py-16 ">
                    <div className="flex flex-col items-center w-full lg:flex-row lg:w-1/2">
                        <div className="max-w-lg">
                            <h1 className="text-xl tracking-wide text-white text-gray-800 lg:text-3xl lg:text-4xl">Wellcome back : {name}</h1>
                            <p className="mt-4 text-gray-300 text-gray-600">Lorem ipsum, dolor sit amet consectetur
                                adipisicing elit. Aut quia asperiores alias vero magnam recusandae adipisci ad vitae
                                laudantium quod rem voluptatem eos accusantium cumque.</p>
                            <div className="mt-6">
                                <button onClick={getUsers}
                                    className="inline-block px-3 py-2 font-semibold text-center text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400">
                                    Get Users</button>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-center w-full mt-2 lg:h-96 lg:w-1/2">
                        <img className="object-cover w-full max-w-2xl rounded-md lg:h-full"
                            src="https://source.unsplash.com/user/erondu/1600x900" alt="apple watch photo" />
                    </div>
                </div>
            </div>
            <div className='bg-sky-300 min-h-12'></div>
        </div >
    )
}

export default Dashboard
