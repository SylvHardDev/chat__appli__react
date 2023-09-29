import React from 'react'
import photos from "../img/add.png"
import { signOut } from 'firebase/auth'
import { auth } from '../firebase'

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className="logo">Chat</span>
      <div className="user">
        <img src={photos} alt="photos" />
        <span>Hardy</span>
        <button onClick={() => signOut(auth)}>logout</button>
      </div>
    </div>
  )
}

export default Navbar