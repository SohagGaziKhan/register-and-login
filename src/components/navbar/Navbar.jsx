import React from 'react'
import "./Navbar.scss";

const Navbar = () => {
  return (
    <>
    <div className="navbar">
        <h2 className="logo">LOGO</h2>
        <div className="nav">
            <button className='btn'>Home</button>
            <button className='btn'>About</button>
            <button className='btn'>Servercse</button>
            <button className='btn'>Contact </button>
            <button className='btns'>Home</button>
        </div>
    </div>
    </>
  )
}

export default Navbar