'use client'
import { Header } from '../index'
import React from 'react'

type LayoutProps = {
  children: React.ReactNode
}
export default function Layout({ children }: LayoutProps) {
  return (
    <div className="w-screen h-screen  relative bg-slate-400">
      <Header />
      <main>{children}</main>
    </div>
  )
}
