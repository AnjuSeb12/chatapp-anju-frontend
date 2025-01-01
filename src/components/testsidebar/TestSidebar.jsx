import React, { useState } from 'react'
import "./TestSide.css"
import { MdOutlinePhone } from "react-icons/md";
import { BiMessageRoundedDetail } from "react-icons/bi";
import { TbBaselineDensityMedium } from "react-icons/tb";
import { IoSettingsOutline } from "react-icons/io5";
import { IoStarOutline } from "react-icons/io5";
import { GoArchive } from "react-icons/go";
import { GrAd } from "react-icons/gr";
import Settings from '../settings/Settings';
import { Link } from 'react-router-dom';



const TestSidebar = ({toggleSettings,isopen}) => {

    const [isExpanded,setIsExpanded]=useState(false)


    const toggleSidenav=()=>{
        setIsExpanded(!isExpanded)
    }
  return (
    <div className={`sidebar-wrapper${isExpanded?"expanded":""} `}>
        <div>
            <div className='text-white pb-4 menu-icon' onClick={toggleSidenav}><TbBaselineDensityMedium /></div>
            <div className='text-white pb-4'>
               <GrAd className="sidenav-icon"/>
               {isExpanded && <span className='sidenav-label'>Message</span>}</div>

            <div className='text-white pb-4'>< BiMessageRoundedDetail/>
            {isExpanded && <span className='sidenav-label'>Message</span>}</div>

            <div className='text-white pb-4'><MdOutlinePhone />
            {isExpanded && <span className='sidenav-label'>Message</span>}</div>

            <div className='border border-white-100 w-6'>
            {isExpanded && <span className='sidenav-label'>Message</span>}
            </div>
        
        </div>
        <div>
            <div className='text-white pb-4'><IoStarOutline/>
            {isExpanded && <span className='sidenav-label'>Message</span>}</div>

            <div className='text-white pb-4'><GoArchive/>
            {isExpanded && <span className='sidenav-label'>Message</span>}</div>

            <div className='border border-gray-100 mb-4 w-6'></div>

            <div className='text-white pb-0 '>
              <Link to="/setting" >
              <IoSettingsOutline onClick={toggleSettings}/>
              {isExpanded && <span className='sidenav-label'>Message</span>}
              </Link></div>
              
              <Settings isopen={isopen} toggleSettings={toggleSettings}/>
            <div className='imgWrapper ml-3 '>
              <img src=''alt='avatar'className='imgSize'/>
            </div>
        </div>
    </div>
  )
}

export default TestSidebar