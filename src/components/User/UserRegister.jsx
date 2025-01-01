import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";






const UserRegister = () => {

    const [formdata,setFormData]=useState({
        username:'',
        email:'',
        bio:'',
        password:'',
        confirmpassword:'',

    })

    const handleChange= (e)=>{
        setFormData({...formdata,[e.target.name]:e.target.value})

    }
    const handleSubmit = async (e)=> {
        e.preventDefault();
        if (formdata.password !== formdata.confirmpassword) {
           console.log("not match")
            return;
          }
        try {
            const res=await axios.post("http://localhost:5000/api/v1/user/signup",{
                username:formdata.username,
                email:formdata.email,
                bio:formdata.bio,
                password:formdata.password,
                
            },{
              withCredentials:true
            })
            
            setFormData({
                username: "",
                email: "",
                bio:"",
                password: "",
                confirmpassword: "",
              });
              if(res.data.success){
                alert('Successfully registered')
              }else{
                alert("Not registered")
              }
        } catch (error) {
            console.log("error",error.message)
            
        }


    }





  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 space-y-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-800">Chat Register</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-black" >Username</label>
            <input
              type="text"
              name="username"
              placeholder="username"
              value={formdata.username}
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" onChange={handleChange}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              placeholder="email"
              value={formdata.email}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Bio:</label>
            <input
              type="text"
              name="bio"
              placeholder="Enter your Bio"
              value={formdata.bio}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter password"
              value={formdata.password}
              onChange={handleChange}
              
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
            <input
              type="password"
              name="confirmpassword"
              placeholder="Confirm your password"
              value={formdata.confirmpassword}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-green-600 rounded-lg hover:bg-green-700 focus:ring focus:ring-green-300"
          >
            Register
          </button>
        </form>
        <p className="text-sm text-center text-gray-600">
          Already have an account?{" "}
          <Link to="/login"className="text-blue-500 hover:underline">Login here</Link>
          
        </p>
      </div>
    </div>
  );
};

export default UserRegister;
