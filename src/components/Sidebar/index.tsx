'use client'
import { Link } from '@app/libs/next'
import { Sheet, SheetTrigger, SheetContent } from '@app/_widgets/ui'
import { FiMenu } from 'react-icons/fi'
import { ComponentProps } from './sidebar-items'

export function SideBar(props: ComponentProps) {
  const { sideBarItems } = props
  return (
    <div className="m-0 p-0">
      <Sheet>
        <SheetTrigger>
          {' '}
          <FiMenu size={23} />
        </SheetTrigger>
        <SheetContent side="left" style={{ width: 280 }} className="p-0 m-0">
          {sideBarItems.map((item) => (
            <div
              className="w-full flex items-center gap-x-3 p-6 hover:bg-primaryYellow cursor-pointer"
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
