import { Image } from '@app/libs/next'
import logo from '@app/assets/imgs/ff-logo.svg'
import { SideBar } from '@app/components'
import { sideBarItems } from '@app/components/Sidebar/sidebar-items'
import { FiPower } from 'react-icons/fi'

export function Header() {
  return (
    <header className="w-full h-16  border-b flex items-center relative px-9 gap-5  justify-between">
      <SideBar sideBarItems={sideBarItems} />
      <div className="flex items-center ">
        <Image src={logo} width={180} height={40} alt="Logo Fast Feet" />
        <FiPower />
      </div>
    </header>
  )
}
