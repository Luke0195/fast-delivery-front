import type { Metadata } from 'next'
import { ToastContainer } from '@app/libs'
import { Roboto_Condensed } from 'next/font/google'

import './globals.css'
import 'react-toastify/dist/ReactToastify.css'

const robotoCondensed = Roboto_Condensed({
  subsets: ['latin'],
  display: 'swap',
  adjustFontFallback: false,
})

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
      <body className={robotoCondensed.className}>
        {children}
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </body>
    </html>
  )
}
