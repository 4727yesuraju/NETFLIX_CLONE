import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuthStore } from '../store/authUser';

export default function SignUpPage() {
  const {searchParams} = new URL(document.location);
  const email = searchParams.get("email");
    const [formData,setFormData] = useState({email});

    const {signup} = useAuthStore();

    function handleSignUp(e){
        e.preventDefault();
        signup({...formData});
    }

    function handleChange(e){
        setFormData(prev=>{
            return {...prev,[e.target.id]:e.target.value};
        })
    }
  return (
    <div className="h-screen w-full hero-bg">
      <header className="max-w-6xl mx-auto flex items-center justify-between p-4">
          <Link to="/">
            <img src="/netflix-logo.png" alt="logo" className="w-52" />
          </Link>
      </header>

      <div className="flex justify-center items-center mt-20 mx-3">
        <div className="w-full max-w-md p-8 space-y-6 bg-black/60 rounded-lg shodow-md">
          <h1 className="text-center text-white text-2xl font-bold mb-4">
            Sign Up
          </h1>

          <form className="spacey-4" onSubmit={handleSignUp}>
                <div>
                    <label htmlFor="email" className="text-sm font-medium text-gray-300 block">
                        Email
                    </label>
                    <input 
                       type = "email"
                       className="w-full px-3 py-2 mt-1 border border-gray-700 rounded-md bg-transparent text-white focus:outline-none focus:ring"
                       placeholder='you@gmail.com'
                       id="email"
                       value={formData.email || ""}
                       onChange = {handleChange}
                    />
                </div>
                
                <div>
                    <label htmlFor="username" className="text-sm font-medium text-gray-300 block">
                        Username
                    </label>
                    <input 
                       type = "text"
                       className="w-full px-3 py-2 mt-1 border border-gray-700 rounded-md bg-transparent text-white focus:outline-none focus:ring"
                       placeholder='yesu'
                       id="username"
                       value={formData.username || ""}
                       onChange = {handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="password" className="text-sm font-medium text-gray-300 block">
                        Password
                    </label>
                    <input 
                       type = "password"
                       className="w-full px-3 py-2 mt-1 border border-gray-700 rounded-md bg-transparent text-white focus:outline-none focus:ring"
                       placeholder='********'
                       id="password"
                       value={formData.password || ""}
                       onChange = {handleChange}
                    />
                </div>

                <button className="w-full py-2 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700">signup</button>
          </form>

          <div className="text-center text-gray-400">
            Already a member? {" "}
            <Link to="/login" className="text-red-500 hover:underline">
               Sign in
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
