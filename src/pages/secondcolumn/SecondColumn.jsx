import React from 'react'
import SearchBar from '../../components/search/SearchBar'
import NameDisplay from '../../components/namedisplay/nameDisplay'

const SecondColumn = () => {
  return (
    <div>
      <div>
      <SearchBar/>

      </div>
      <div className='p-0'>
        <NameDisplay/>
      </div>
       
    </div>
  )
}

export default SecondColumn