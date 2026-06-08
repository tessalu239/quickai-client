/* eslint-disable no-unused-vars */
import { useClerk, useUser } from '@clerk/clerk-react'
import { Eraser, FileText, Hash, Home, Icon, Image, LogOut, Scissors, SquarePen, Users } from 'lucide-react'
import React from 'react'
import { NavLink } from 'react-router-dom'

const navItems = [
    {to:'/ai', title: 'Dashboard', Icon: Home},
    {to:'/ai/write-article', title:'Write Article',Icon:SquarePen},
    {to:'/ai/blog-titles', title:'Block Title',Icon:Hash},
    {to:'/ai/generate-images', title:'Generate Images',Icon:Image},
    {to:'/ai/remove-background', title:'Remove Background',Icon:Eraser},
    {to:'/ai/remove-object', title:'Remove Object',Icon:Scissors},
    {to:'/ai/review-resume', title:'Review Resume',Icon:FileText},
    {to:'/ai/community', title:'Community', Icon:Users}
]
const Sidebar = ({sidebarOpen,setSidebarOpen}) => {
    const {user} = useUser()
    const {signOut, openUserProfile} = useClerk()

    return (
    <div className={`w-60 bg-white border-r border-gray-200 flex flex-col justify-between items-center max-sm:absolute top-14 bottom-0 ${sidebarOpen? 'translate-x-0':'max-sm:translate-x-full'} transition-all duration-300 ease-in-out`}>
        <div className="my-7 w-full px-1">
            <img src={user.imageUrl} className="w-13 rounded-full mx-auto"/>
            <h1 className="mt-1 text-center cursor-pointer" onClick={openUserProfile} >{user.fullName}</h1>
            <div className="px-6 mt-5 text-sm text-gray-500 font-medium">

            {navItems.map(({to, title, Icon})=>(
                <NavLink key={to} to={to} end = {to ==="/ai"} onClick={setSidebarOpen(false)} className={({isActive})=>`px-3 py-2.5 flex items-center gap-3 rounded ${isActive ? 'bg-gradient-to-r from-[#3C81F6] to-[#9243E3] text-white': ''}`}>
                    {({isActive})=>(
                        <>
                        <Icon className={`h-4 w-4 ${ isActive ? 'text-white': ''}`}/>
                        {title}
                        </>
                    )}
                </NavLink>
            ))}
            </div>
        </div>
        <div className='w-full border-t border-gray-200 p-4 px-7 flex items-center justify-between'>
            <img src={user.imageUrl} className='w-8 rounded-full' alt="user image"/>
            <h1 className='text-sm font-medium cursor-pointer' onClick={openUserProfile}>{user.fullName}</h1>
            <LogOut onClick={signOut} className='w-4.5 text-gray-400 hover:text-gray-700 transition cursor-pointer'/>
        </div>
    </div>
  )
}

export default Sidebar