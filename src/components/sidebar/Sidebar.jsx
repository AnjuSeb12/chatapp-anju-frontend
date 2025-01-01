import React, { useState } from 'react'
import { MdOutlinePhone } from "react-icons/md";
import { BiMessageRoundedDetail } from "react-icons/bi";
import { TbBaselineDensityMedium } from "react-icons/tb";
import { IoSettingsOutline } from "react-icons/io5";
import { IoStarOutline } from "react-icons/io5";
import { GoArchive } from "react-icons/go";
import { GrAd } from "react-icons/gr";
import './sidebar.css'
import { Link } from 'react-router-dom';
import Settings from '../settings/Settings';


const Sidebar = () => {
  const [isopen,setIsopen]=useState(false);

  const toggleSettings=(e)=>{
    e.preventDefault()
    setIsopen(!isopen)
  }
  return (
    <div className='sidebar-wrapper '>
        <div>
            <div className='text-white pb-4'><TbBaselineDensityMedium /></div>
            <div className='text-white pb-4'><GrAd/></div>
            <div className='text-white pb-4'><Link to="/contact">< BiMessageRoundedDetail/></Link>
              </div>
            <div className='text-white pb-4'><MdOutlinePhone /></div>
            <div className='border border-white-100 w-6'></div>
        
        </div>
        <div>
            <div className='text-white pb-4'><IoStarOutline/></div>
            <div className='text-white pb-4'><GoArchive/></div>
            <div className='border border-gray-100 mb-4 w-6'></div>
            <div className='text-white pb-0 '>
              <Link to="/setting" >
              <IoSettingsOutline onClick={toggleSettings}/>
              </Link></div>
              <Settings isopen={isopen} toggleSettings={toggleSettings}/>
            <div className='imgWrapper ml-3 '>
              <img src=''alt='avatar'className='imgSize'/>
            </div>
        </div>
    </div>
  )
}

export default Sidebar