import type { Metadata } from 'next'
import { Roboto_Condensed } from 'next/font/google'
import './globals.css'

const robotoCondensed = Roboto_Condensed({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Fast Feet',
  description: 'Application to manager recipents',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={robotoCondensed.className}>{children}</body>
    </html>
  )
}
