import React from 'react'
import Sidebar from './Sidebar'
import Navbar from './Navbar'

const Layout = ({children,showSidebar}) => {
  return (
    <div className='h-screen'>
      <div className='flex'>
        {showSidebar && <Sidebar/>}

        <div className='flex flex-col flex-1'>
            <Navbar/>
            <main>
                {children}
            </main>
        </div>

      </div>
    </div>
  )
}

export default Layout