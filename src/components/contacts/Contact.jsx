import React, { useEffect, useState } from 'react'

import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { setContacts } from '../redux/ConverSlice'





const Contact= () => {


  // const [contact, setContact] = useState([])

  const contacts=useSelector((state)=>state.getContact)
  const dispatch=useDispatch()

  useEffect(() => {

    const fetchContact = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/v1/user/getuser", {
          withCredentials: true,
        })
        
        dispatch(setContacts([...res.data.users]))


      } catch (error) {

        console.log("error", error.message)

      }
    }
    fetchContact()



  }, [])
  return (

    <div className="flex flex-wrap ml-2 mr-2 nameDisplayContainer">
  {contacts.length === 0 ? (
    <p>No contact available</p>
  ) : (
    contacts.map((user, index) => (
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

export default Contact
