import React from 'react'
import SecondColumn from '../pages/secondcolumn/SecondColumn'
import "./ChatLayout.css"
import FirstCol from '../pages/firstcolumn/FirstCol'
import ThirdCol from '../pages/thirdCol/ThirdCol'





const ChatLayout = () => {
  return (
    <div className='container'> 
        <div className='left-col'><FirstCol/></div>
        <div className='mid-col '>
            
        <SecondColumn/>
        </div>
        <div className='right-col'><ThirdCol/></div>
        

    </div>
  )
}

export default ChatLayout