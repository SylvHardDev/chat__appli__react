import React from 'react'
import photos from "../img/add.png"

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className="logo">Chat</span>
      <div className="user">
        <img src={photos} alt="photos" />
        <span>Hardy</span>
        <button>logout</button>
      </div>
    </div>
  )
}

export default Navbar