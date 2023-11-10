import '@/css/globals.css'
import { NavBar } from '@/components/navigation/NavBar'
import {IoPlanetSharp} from 'react-icons/io'

import Header from '@/components/header/header'
 

 
export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header/>
          {/* <IoPlanetSharp/> */}
            {/* <h1 className="text-4xl font-semibold tracking-tight pt-3">Space Junk</h1> */}
        <NavBar/>
        {children}</body>
    </html>
  )
}
