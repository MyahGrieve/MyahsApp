import * as React  from "react";
import { Button } from '@nextui-org/react';
import Link from "next/link";
import {Card, CardHeader, Image, CardFooter} from '@nextui-org/react'
import { FaCcStripe, FaShippingFast } from "react-icons/fa";
import { AiOutlineWoman } from "react-icons/ai";
import { FaLeaf } from "react-icons/fa6";
import { HiPaintBrush } from "react-icons/hi2";


//LANDING PAGE, first page that shows up
export default function Home() {
 
 

  return (
    <main>
        <div  className="md:p-20 flex items-center" style={{ backgroundImage: 'url("/out-of-world.jpg")', backgroundPosition:'100%', height: '600px'}}>
          <div className=" bg-black opacity-80 p-10  text-white">
  <h2 className='text-7xl lg:text-8xl font-bold   '>Explore the Universe </h2>
  <p className=' text-6xl '>One Print at a Time</p>
    <Link  href="/items/multiple-items">
      <Button  className='mt-5  text-black font-bold'>
      
      Browse The Collection
      
      </Button> 
      </Link>
      </div>
     
    </div>
            <div className="m-10 mx-10">
        <h3 className=" text-5xl font-bold md:mx-10">Space art for every space</h3>
        <div>
        <p className="text-xl mt-5 md:mx-10"> Astral Art offers a diverse range of  artworks crafted for every space. From mesmerizing galaxies to abstract cosmic expressions, explore our exclusive categories and discover the universe in mediums that bring the cosmos to life.</p>
        </div>

    
        
        <div className="gap-2 grid grid-cols-12 grid-rows-2 mt-9 md:m-9">
       
          <Card  className=" col-span-12 sm:col-span-4 h-[300px] ">
      <CardHeader className="absolute z-10 top-1 flex-col !items-start">
        <p className="text-tiny text-white/60 uppercase font-bold">Through the lens</p>
        <h4 className="text-white font-medium text-large">Photography</h4>
      </CardHeader>
      <Image
        removeWrapper
        alt="Card background"
        className="z-0 w-full h-full object-cover"
        src="/NASA-moon.jpg"
      />
    </Card>
    

   
    <Card className="col-span-12 sm:col-span-4 h-[300px] ">
      <CardHeader className="absolute z-10 top-1 flex-col !items-start">
        <p className="text-tiny text-white/60 uppercase font-bold">Pixel Planets</p>
        <h4 className="text-white font-medium text-large">Digital Art</h4>
      </CardHeader>
      <Image
        removeWrapper
        alt="Card background"
        className="z-0 w-full h-full object-cover"
        src="/grogu.jpg"
      />
    </Card>

   
    <Card className="col-span-12 sm:col-span-4 h-[300px] ">
      <CardHeader className="absolute z-10 top-1 flex-col !items-start">
        <p className="text-tiny text-white/60 uppercase font-bold">Our Planet</p>
        <h4 className="text-white font-medium text-large">Eco-Friendly</h4>
      </CardHeader>
      <Image
        removeWrapper
        alt="Card background"
        className="z-0 w-full h-full object-cover"
        src="/vintage-earth.jpg"
      />
    </Card>
  
   
    <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-5 ">
      <CardHeader className="absolute z-10 top-1 flex-col items-start">
        <p className="text-tiny text-white/60 uppercase font-bold">Iconic</p>
        <h4 className="text-white/90 font-medium text-xl">From NASA</h4>      </CardHeader>
      <Image
        removeWrapper
        alt="Card example background"
        className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
        src="/first-landing.jpg"
      />
      
    </Card>

   
    <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-7 ">
      <CardHeader className="absolute z-10 top-1 flex-col items-start">
      <p className="text-tiny text-white/60 uppercase font-bold">Outer Worlds</p>
        <h4 className="text-white/90 font-medium text-xl">Galaxy Prints</h4>
      </CardHeader>
      <Image
        removeWrapper
        alt="Relaxing app background"
        className="z-0 w-full h-full object-cover"
        src="/space-dreams.jpg"
      />
      
    </Card>
    </div>
<div className="flex justify-center mt-10">
<div className="pt-5 flex flex-col md:flex-row items-center justify-between md:px-3 md:gap-8 ">
  
<div className="flex md:flex-col items-center mb-4 ">
  <FaCcStripe className="mb-2 text-5xl  mr-2" />
  <p className="text-center font-semibold">Secure Payments</p>
</div>

<div className="flex md:flex-col items-center mb-4 ">
  <FaShippingFast className="mb-2 text-5xl  mr-2" />
  <p className="text-center font-semibold">Same Day Shipping</p>
</div>

<div className="flex md:flex-col items-center mb-4 ">
  <AiOutlineWoman className="mb-2 text-5xl  mr-2" />
  <p className="text-center font-semibold">Woman Owned</p>
</div>

<div className="flex md:flex-col items-center mb-4 ">
  <FaLeaf className="mb-2 text-5xl  mr-2" />
  <p className="text-center font-semibold">Eco Certified</p>
</div>

<div className="flex md:flex-col items-center mb-4 ">
  <HiPaintBrush className="mb-2 text-5xl  mr-2" />
  <p className="text-center font-semibold">Artist Approved</p>
</div>

</div>
</div>



</div>


    </main>
  )
}
