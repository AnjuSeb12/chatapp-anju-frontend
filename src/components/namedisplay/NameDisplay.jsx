import React, { useEffect, useState } from 'react'
import "./NameDisplay.css"
import axios from 'axios'


const NameDisplay = () => {


  const [message, setMessage] = useState([])

  useEffect(() => {

    const fetchMessage = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/v1/message/getmessage", {
          withCredentials: true,
        })
        console.log("hitted")
        console.log("getmessage", res.data.data)
        setMessage(res.data.data)


      } catch (error) {

        console.log("error", error.message)

      }
    }
    fetchMessage()



  }, [])
  return (

    <div className="flex flex-wrap ml-2 mr-2 nameDisplayContainer">
  
     
  {message.length === 0 ? (
    <p>No contact available</p>
  ) : (
    message.map((message, index) => (
      <div className="flex items-center mb-4 w-full" key={index}>
        
        <div className="imageWrapper">
          <img
            src={message.avatar || "placeholder.png"}
            alt="avatar"
            className="imageMessageDisplay rounded-full w-12 h-12"
          />
        </div>

       
        <div className="ml-3 text-white">
          <div className="flex flex-row items-center">
            <h4 className="mr-4 font-bold">{message.receiverName}</h4>
           
          </div>
          <h5 className="max-w-60 max-h-7 overflow-hidden text-ellipsis whitespace-nowrap">
        {message.latestMessage}
          </h5>
        </div>
      </div>
    ))
  )}
</div>

  )
}

export default NameDisplay