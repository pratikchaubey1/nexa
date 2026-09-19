import React from 'react'
import { Link } from 'react-router-dom'

function Aboutme() {
  return (
    <Link to='/about' >
    <div className='text-xl font-serif'>About Me </div>
    </Link>
  )
}

export default Aboutme