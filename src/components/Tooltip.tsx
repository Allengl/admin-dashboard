'use client'
import React from 'react'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import { FiSettings } from 'react-icons/fi'



const Tooltip = () => {
  return (
    <div className="flex relative dark:bg-main-dark-bg">
      <div className="fixed right-4 bottom-4" style={{ zIndex: '1000' }}>
        <TooltipComponent content="Settings" position="TopCenter">
          <button type="button" className="fisettings text-3xl text-white p-3 hover:drop-shadow-xl 
          hover:bg-light-gray" style={{ background:'blue', borderRadius:'50%'}} >
            <FiSettings />
          </button>
        </TooltipComponent>
      </div>
    </div>
  )
}

export default Tooltip
