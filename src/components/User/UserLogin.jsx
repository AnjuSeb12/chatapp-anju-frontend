import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";






const UserLogin = () => {
  const navigate=useNavigate()

  const [formData,setFormData]=useState({
    email:"",
    password:"",
    confirmpassword:""
  })

  const handleChange=(e)=>{
   
    setFormData({
      ...formData,
      [e.target.name]:e.target.value
    })

  }
  const handleSubmit = async(e)=>{
    e.preventDefault();
    if(formData.password!==formData.confirmpassword){
      console.log("Not match plc confirm it")
      return
    }
    try {
      const res=await axios.post("http://localhost:5000/api/v1/user/login",{
        email:formData.email,
        password:formData.password
      },
    {
      withCredentials:true
      
    })
    if(res.data.success){
      alert('successfully login')
      navigate('/')

    }else{
      alert('not logged')
    }
      
    } catch (error) {
      console.log("error",error.message)
      
    }
  }




  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 space-y-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-800">Chat Login</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-700">email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              placeholder="Enter your username"
              onChange={handleChange}
              
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">ConfirmPassword</label>
            <input
              type="password"
              name="confirmpassword"
              value={formData.confirmpassword}
              onChange={handleChange}
              placeholder="Enter your password"
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring focus:ring-blue-300"
          >
            Login
          </button>
        </form>
        <p className="text-sm text-center text-gray-600">
          Don't have an account?{" "}
          <Link to="/signup" className="text-blue-500 hover:underline">Register here</Link>
          
        </p>
      </div>
    </div>
  );
};

export default UserLogin;
