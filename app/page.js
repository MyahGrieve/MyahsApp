import Image from 'next/image'
import * as React from "react";

// 1. import `NextUIProvider` component
//import { PageHeader } from './components/header/PageHeader'
// import {Heading} from "@/components/tailwind-helpers/tw-merge/Heading"
// import { Button } from '@/components/tailwind-helpers/cva/Button'

//LANDING PAGE, first page that shows up
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* <Heading as="h1" className="text-red-500" >My Project Heading</Heading>
      <Button intent="orange" size="large">Call to Action</Button> */}
    </main>
  )
}
