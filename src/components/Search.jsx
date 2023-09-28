import React from 'react'
import homme from '../img/avatar/homme.png'

const Search = () => {
  return (
    <div className='search'>
      <div className="searchForm">
        <input type="text" placeholder='Find user' />
      </div>
      <div className="userChat">
        <img src={homme} alt="" />
        <div className="userChatInfo">
          <span>Jane</span>
        </div>
      </div>
    </div>
  )
}

export default Search