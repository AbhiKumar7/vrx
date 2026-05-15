import React from 'react'
import OnBoardAsideBar from './OnBoardAsideBar'
import OnBoardNavbar from './OnBoardNavbar'

function OnBoardLayout({ children, showSidebar = false }) {
  return (
    <div className="min-h-screen flex">
    
      {showSidebar && <OnBoardAsideBar/>}
      <div className="flex-1 flex flex-col">
        <OnBoardNavbar />
        <main className="flex-1 overflow-y-auto p-4">{children}</main>
      </div>
    </div>
  )
}

export default OnBoardLayout