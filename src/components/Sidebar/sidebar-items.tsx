'use client'
import React from 'react'
import { CgNotes } from 'react-icons/cg'
import { MdDeliveryDining } from 'react-icons/md'
import { LuUser } from 'react-icons/lu'
import { MdOutlineReportProblem } from 'react-icons/md'
import { IoIosNotificationsOutline } from 'react-icons/io'

export type SideBarProps = {
  icon: JSX.Element
  label: string
  pathName: string
}

export type ComponentProps = {
  sideBarItems: SideBarProps[]
}

export const sideBarItems: SideBarProps[] = [
  {
    icon: <CgNotes size={20} className="text-primaryGray" />,
    label: 'Encomendas',
    pathName: '/orders',
  },

  {
    icon: <MdDeliveryDining size={20} className="text-primaryGray" />,
    label: 'Encomendas',
    pathName: '/recipents',
  },

  {
    icon: <LuUser size={20} className="text-primaryGray" />,
    label: 'Destinatários',
    pathName: '/recipents',
  },

  {
    icon: <MdOutlineReportProblem size={20} className="text-primaryGray" />,
    label: 'Problemas',
    pathName: '/recipents',
  },

  {
    icon: <IoIosNotificationsOutline size={20} className="text-primaryGray" />,
    label: 'Notificações',
    pathName: '/recipents',
  },
]