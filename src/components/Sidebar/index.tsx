'use client'
import { Link } from '@app/libs/next'
import { Sheet, SheetTrigger, SheetContent } from '@app/_widgets/ui'
import { FiMenu } from 'react-icons/fi'
import { ComponentProps } from './sidebar-items'

export function SideBar(props: ComponentProps) {
  const { sideBarItems } = props
  return (
    <div className="">
      <Sheet>
        <SheetTrigger>
          {' '}
          <FiMenu size={20} className="text-primaryGray" />
        </SheetTrigger>
        <SheetContent side="left" style={{ width: 280 }} className="pt-4 px-0">
          {sideBarItems.map((item) => (
            <div
              className="w-full flex items-center gap-x-3 p-4 hover:bg-primaryYellow cursor-pointer"
              key={String(item.pathName)}
            >
              {item.icon}
              <Link href={item.pathName}>
                <span className="text-primaryGray block pt-1">
                  {' '}
                  {item.label}
                </span>
              </Link>
            </div>
          ))}
        </SheetContent>
      </Sheet>
    </div>
  )
}
