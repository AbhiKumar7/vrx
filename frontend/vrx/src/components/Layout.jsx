import React from 'react'
import NavBar from './NavBar'
import AsideBar from './AsideBar'

function Layout({ children, showSidebar = false }) {
  return (
     <div className="min-h-screen flex">
     
      
      {showSidebar && <AsideBar/>}
      <div className="flex-1 flex flex-col">
        <NavBar />
        <main className="flex-1 overflow-y-auto p-4">{children}</main>
      </div>
    </div>
  )
}

export default Layout