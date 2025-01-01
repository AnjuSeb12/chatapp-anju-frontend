import React from 'react'
import "./Search.css"
import { GoSearch } from "react-icons/go";
import { IoFilterSharp } from "react-icons/io5";
import { MdChatBubbleOutline } from "react-icons/md";

const SearchBar = () => {
    return (
        <div  >

            <div className='topIcons'>
                <h3 className='mr-44 text-white'>Chats</h3>
                <div className='filterMessageIcon'>
               
                <div className='mr-4'> <MdChatBubbleOutline /></div>
                <div ><IoFilterSharp /></div>

                </div>
               

            </div>
            <div className='search-bar'>
            
                <input
                    type="text"
                    placeholder='search......'


                    className="search-input"
                />
                <GoSearch className='goSearch' />

            </div>


        </div>
    )
}

export default SearchBar