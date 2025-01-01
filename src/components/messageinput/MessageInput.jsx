import React, { useState } from 'react'
import { CiFaceSmile } from "react-icons/ci";
import { CiMicrophoneOn } from "react-icons/ci";
import { RiAttachment2 } from "react-icons/ri";
import "./MessageInput.css"
import axios from 'axios';
import { FaPaperPlane } from "react-icons/fa";



const MessageInput = () => {
  const receiverId="6766aa8a6790f6a3dd06d8d2"
  const [newMessage,setNewMessage]=useState('');



  const handleSendMessage= async()=>{

    try {

      const res= await axios.post("http://localhost:5000/api/v1/message/messageadd",{
        receiverId,
        content:newMessage,
        type:"text"
      },
    {
      withCredentials:true,
      headers: {
       "Content-Type": "application/json",
      },
    })
      setNewMessage("")
      
    } catch (error) {
      console.log('Error sending message:', error.message);
    }
  }

  
  return (
    <div className='flex flex-row justify-around pt-10'>
      <div className='flex flex-row'>
        <div className='pr-4 text-3xl text-white'><CiFaceSmile/></div>
        <div className='text-3xl text-white'><RiAttachment2/></div>

      </div>
      <div ><input type="text" placeholder='enter' className='inputMessage' onChange={(e)=>setNewMessage(e.target.value)} /></div>
      <button
        onClick={handleSendMessage}
        disabled={!newMessage.trim()}
        className={`p-2 rounded-full ${
          newMessage.trim()
            ? "bg-green-500 text-white hover:bg-green-600"
            : "bg-gray-300 cursor-not-allowed"
        }`}
      >
        <FaPaperPlane size={20} />
      </button>
      <div>
        <div className='text-3xl text-white'><CiMicrophoneOn/></div>
      </div>
        
    </div>
  )
}

export default MessageInput