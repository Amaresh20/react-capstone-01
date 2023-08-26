import React from 'react'
import sideimg from '../assets/sideimg.svg'

const Sidebar = () => {
  return (
    <div className='left-section' >
        <img src={sideimg} />
        <p>Discover new things on Superapp</p>
    </div>
  )
}

export default Sidebar