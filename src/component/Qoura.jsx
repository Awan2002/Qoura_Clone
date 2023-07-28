import React from 'react'
import "../css/Qoura.css"
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Feed from './Feed'
import Widget from './Widget'

function Qoura() {
  return (
    <div className='quora'>
        <Navbar />
        <div className="quora_content">
          <Sidebar />
          <Feed />
          <Widget />
        </div>
    </div>
  )
}

export default Qoura