import React,{useContext, useState} from 'react'
import {loginCall} from "../../loginApiCall.js";
import { AuthContext } from '../../context/AuthContext';



function Login() {
    const [loginDetails, setLoginDetails] = useState({email:"",password:""});

    const {user, isFetching,payload, error, dispatch} = useContext(AuthContext);
    const handleLoginButton = (e)=>{
        setLoginDetails({ ...loginDetails, [e.target.name]: e.target.value })
        console.log(loginDetails)
    }
    const headers = {
        'Content-Type': 'application/json'
    }

    const handleSubmitLoginButton = (e)=>{
        e.preventDefault();
        loginCall(loginDetails,dispatch);
        
        
    }
    return (
        <div>

<div>
  <section className="min-h-screen flex items-stretch text-white ">
    <div className="lg:flex w-1/2 hidden bg-gray-500 bg-no-repeat bg-cover relative items-center" style={{backgroundImage: 'url(/smiu.jpg)'}}>
      <div className="absolute bg-black opacity-60 inset-0 z-0" />
      <div className="w-full px-24 z-10">
        <h1 className="text-5xl font-bold text-left tracking-wide">Among SMIU</h1>
        <p className="text-3xl my-4">A Place for SMIU to share its Memories.</p>
      </div>

    </div>
    <div className="lg:w-1/2 w-full flex items-center justify-center text-center md:px-16 px-0 z-0 bg-custom-theme">
      <div className="absolute lg:hidden z-10 inset-0 bg-gray-500 bg-no-repeat bg-cover items-center" style={{backgroundImage: 'url(/smiu.jpg)'}}>
        <div className="absolute bg-black opacity-60 inset-0 z-0" />
      </div>
      <div className="w-full py-6 z-20">
  
     
        <p className="text-gray-100 text-4xl tracking-widest">
          LOGIN
        </p>
        {(error)&&
                            <p className="px-2 py-4 bg-red-500 rounded-xl mt-4">Email or Password is Incorrect!</p>}  
        <p>
           Don't have an account, click here to <a href="/signup">sign up</a>
        </p>
        <form onSubmit={handleSubmitLoginButton} className="sm:w-2/3 w-full px-4 lg:px-0 mx-auto">
            <div className="text-gray-700">
          <div className="pb-2 pt-4">
            <input type="email" onChange={handleLoginButton} required name="email" id="email" placeholder="Email" className="block w-full p-4 text-lg rounded-xl " />
          </div>
          <div className="pb-2 pt-4">
            <input className="block w-full p-4 text-lg rounded-xl " onChange={handleLoginButton} type="password" required name="password" id="password" placeholder="Password" />
          </div>
            </div>
         
          <div className="px-4 pb-2 pt-4">
            <button disabled={isFetching} className="uppercase block w-full p-4 text-lg rounded-full bg-gray-500 hover:bg-gray-600 focus:outline-none"
            type="submit"
            >
                {isFetching?"Loading":"Sign In"}</button>
          </div>
         
        </form>
      </div>
    </div>
  </section>
 
</div>

        </div>
    )
}

export default Login
