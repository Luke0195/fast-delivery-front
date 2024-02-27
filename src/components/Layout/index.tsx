'use client'
import { SideBar } from '../Sidebar'
import { sideBarItems } from '../Sidebar/sidebar-items'
import { useState } from 'react'

export function Layout() {
  const [activeItem, setActiveItem] = useState(0)

  return (
    <div className="w-screen h-screen  relative">
      <SideBar sideBarItems={sideBarItems} />
    </div>
  )
}
