import React from 'react'
import { IoVideocamOutline } from "react-icons/io5";
import { MdOutlinePhone } from "react-icons/md";
import { GoSearch } from "react-icons/go";
import "./TitleName.css"

const TitleName = () => {
  return (
    <div className='titleWrapper'>
        <div className='flex flex-row gap-7'>
            <div className='imageWrapperTitle'>
                <img src='' alt="ava" className='imageTitle' />
            </div>
            <div>
                <h3 className='text-white'>Anila</h3>
            </div>

        </div>
        <div className='flex flex-row gap-5'>
            <div className='flex flex-row iconBorder'>
                <div className='text-white'><IoVideocamOutline/></div>
                <div className='borderCenter'></div>
                <div className='text-white'><MdOutlinePhone/></div>
                
                
            </div>
            <div className='text-white mr-7 text-2xl'><GoSearch/> </div>
            

        </div>
    </div>
  )
}

export default TitleName