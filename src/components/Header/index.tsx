import logo from '@app/assets/imgs/ff-logo.svg'
import { SideBar } from '@app/components'
import { sideBarItems } from '@app/components/Sidebar/sidebar-items'
import { FiPower } from 'react-icons/fi'

export function Header() {
  return (
    <header className="w-full h-16  border-b flex items-center relative px-9 gap-5  justify-between border-b-gray-300">
      <SideBar sideBarItems={sideBarItems} />
      <div className="flex items-center justify-between w-full ">
        <h3 className="font-bold italic text-2xl text-primaryYellow">
          Fast<span>Feet</span>
        </h3>
        <FiPower />
      </div>
    </header>
  )
}
