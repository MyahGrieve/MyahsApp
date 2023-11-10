import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link" 
// import { getDimensions } from 'next/image';
// import {usePress} from 'react-aria'
 
 function ArtCard ( {...item}){
 
const id = item.id

    return (
        // 
          // <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">
          
        <Card shadow="sm">
          <CardBody className="overflow-visible p-5 flex items-center justify-center">
           <Link href={`single-item/${item.id}`}> 
           <Image
              shadow="sm"
              radius="lg"
              width={500}
              height={500}
              // fill={false}
              alt="title"
              // className="w-full object-cover h-[140px]"
              src={item.image}
            /></Link>
          </CardBody>
          <CardFooter className="text-small justify-between">
            <b>{item.title}</b>
            <p className="text-default-500">{item.price}</p>
          </CardFooter>  
        </Card>
       
       
      
    // 
    )
 }



 export {ArtCard}