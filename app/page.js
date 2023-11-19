import Image from 'next/image'
import * as React from "react";
import { Button } from '@nextui-org/react';
import { PageHeader } from '@/components/header/PageHeader';


//LANDING PAGE, first page that shows up
export default function Home() {
  return (
    <main>
      <PageHeader title="Astral Art"/>
        <div  className="pl-20" style={{ backgroundImage: 'url("/out-of-world.jpg")', backgroundPosition:'100%', height: '600px' }}>
  <h2 className='text-7xl lg:text-8xl font-bold  align-middle pt-20 w-full'>Explore the Universe </h2>
  <p className=' text-6xl w-full'>One Print at a Time</p>
    <Button className='mt-5 md bg-black opacity-80 text-white'>Browse The Collection</Button> 
    </div>
            
    </main>
  )
}
