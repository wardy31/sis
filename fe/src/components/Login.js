import loginImage from '../assets/img/login.svg'
import {Link,useNavigate} from 'react-router-dom'
import { useState } from "react";
import axios from 'axios'
import toastr from 'toastr'

function Login() {
    const navigate = useNavigate()
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function handleSubmit(e){
        e.preventDefault()
        
        const login = {
            username: username,
            password: password
        }

        axios.post('http://127.0.0.1:8000/api/login',login)
        .then(res => {
            navigate('/manage')
            toastr["success"]("Successfully Login!")
        })
        .catch(res => {
            setUsername('')
            setPassword('')
        })
    }

    return (
        <div class="h-screen">
            <div class="container mx-auto px-6 py-8 h-full">
                <div class="flex justify-center items-center flex-wrap h-full">
                    <div class="lg:w-96 lg:mr-24 ">
                        <img src={loginImage} class="w-full" alt="Phone image"/>
                    </div>                        

                    <div class="md:w-8/12 lg:w-3/12 lg:ml-20">
                        <div class="mb-12 font-extrabold text-3xl">
                            <p>Login Account</p>
                        </div>
                        <form onSubmit={handleSubmit} >
                            <div>
                                <label class="block pb-2 text-md font-bold">Username</label>
                                <input type="text" value={username} onChange={(e)=> setUsername(e.target.value)} class="border-2 border-slate-700 rounded-md focus:border-slate-900 focus:ring-0 w-full"/>
                            </div>      

                            <div class="pt-5">
                                <label class="block pb-2 text-md font-bold">Password</label>
                                <input type="password" value={password} onChange={(e)=> setPassword(e.target.value)} class="border-2 border-slate-700 rounded-md focus:border-slate-900 focus:ring-0 w-full"/>
                            </div>           

                            <div class="pt-4">
                            
                            <button type="submit"
                            class="inline-block px-7 py-3 bg-indigo-800 text-white font-bold text-sm leading-snug uppercase rounded shadow-md hover:bg-indigo-600 hover:shadow-lg focus:bg-indigo-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                            >
                                Sign in
                            </button>
                            </div>          
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login