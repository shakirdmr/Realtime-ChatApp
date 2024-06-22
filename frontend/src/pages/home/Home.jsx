import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import MessageContainer from '../../components/messages/MessageContainer'

const home = () => {
  
    return (
      <div className="outerBox">
      <div className=' box flex sm:h-[450px] md:h-[650px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
      
      <Sidebar />

      <MessageContainer />
      </div>
      </div>
    
  )
}

export default home