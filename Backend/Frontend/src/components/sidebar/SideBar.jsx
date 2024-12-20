import React from 'react'
import SearchInput from './SearchInput'
import Conversation from './Conversation'
import LogoutButton from './LogoutButton'

function SideBar() {
  return (
    <div className=' flex flex-col sm:min-w-[100px] sm-min-h-[100px] md:min-w-[300px] min-h-20 border-r border-slate-400'>
        <SearchInput/>
        {/* //divider by div */}
        <div className='divider px-3'></div>
        <Conversation/>
        <LogoutButton/>
    </div>
  )
}

export default SideBar


