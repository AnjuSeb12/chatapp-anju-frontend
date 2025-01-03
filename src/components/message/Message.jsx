import React, { useEffect, useState } from 'react'
import "./Message.css";
import axios from 'axios';


const Message = () => {
const [messageDisplay,setMessageDisplay]=useState([]);

useEffect(()=>{
  const fetchMessage=async ()=>{
    try {
      const message=await axios.get(`http://localhost:5000/api/v1/message/getmessage/${conversationId}`,{
        
          withCredentials:true,
      })
      console.log("get",message.data.getMessage)
      setMessageDisplay(message.data.getMessage.message)
      
    } catch (error) {
      console.log("error",error.message)
      
    }
    
  }
  fetchMessage()
 

},[messageDisplay])

  return (
    <div className='containerMessage'>
      {
        messageDisplay && messageDisplay.map((message,index)=>(
          <span className="messagehead" key={index}>{message}</span>

        ))
  }
      
      
        
       
    </div>
  )
}

export default Message