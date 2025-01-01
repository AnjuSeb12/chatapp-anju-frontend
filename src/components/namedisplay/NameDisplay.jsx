import React, { useEffect, useState } from 'react'
import "./NameDisplay.css"
import axios from 'axios'


const NameDisplay = () => {


  const [contact, setContact] = useState([])

  useEffect(() => {

    const fetchContact = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/v1/user/getuser", {
          withCredentials: true,
        })
        console.log("getcontacts", res.data.users)
        setContact([...res.data.users])


      } catch (error) {

        console.log("error", error.message)

      }
    }
    fetchContact()



  }, [])
  return (

    <div className="flex flex-wrap ml-2 mr-2 nameDisplayContainer">
     
  {contact.length === 0 ? (
    <p>No contact available</p>
  ) : (
    contact.map((user, index) => (
      <div className="flex items-center mb-4 w-full" key={index}>
        
        <div className="imageWrapper">
          <img
            src={user.avatar || "placeholder.png"}
            alt="avatar"
            className="imageMessageDisplay rounded-full w-12 h-12"
          />
        </div>

       
        <div className="ml-3 text-white">
          <div className="flex flex-row items-center">
            <h4 className="mr-4 font-bold">{user.username}</h4>
           
          </div>
          <h5 className="max-w-60 max-h-7 overflow-hidden text-ellipsis whitespace-nowrap">
        {user.bio}
          </h5>
        </div>
      </div>
    ))
  )}
</div>

  )
}

export default NameDisplay