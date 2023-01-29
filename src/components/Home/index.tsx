import React from 'react'
import { Link } from 'react-router-dom'
import './index.scss'

export default function Home() {
  return (
    <div className='container home-page'>
      <div className='text-zone'>
        <h1>Hello, 
          <br/> 
          I'm Matthew
          <br/>
          web developer 
        </h1>
        <h2>Frontend Developer</h2>
        <Link to='/contact' className='flat-button'>CONTACT ME</Link>
      </div>
    </div>
  )
}
