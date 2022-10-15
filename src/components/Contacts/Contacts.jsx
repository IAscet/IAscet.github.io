import React from 'react'
import gitico from './github.png'
import tg from './tg.png'
import './Contacts.css'
function Contacts() {
  return (
    <div>
        <h1 className='cont'>My contacts</h1>
        <img src={gitico} alt="github" className='gitico'/>
        <img src={tg} alt="tg" className='tg'/>
    </div>
  )
}

export default Contacts
