import {Card, CardBody, CardFooter} from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link" 

 
 function ArtCard ( {...item}){
 
const id = item.id


    return (
          
        <Card shadow="sm">
          <CardBody className="overflow-visible p-5 flex items-center justify-center">
           <Link href={`single-item/${item.id}`}> 
           <Image
              shadow="sm"
              radius="lg"
              width={500}
              height={500}
              alt="title"
              src={item.image}
            /></Link>
          </CardBody>
          <CardFooter className="text-small justify-between">
              <p>{item.title}</p>
              <p className="text-default-500" >{item.price}</p>
              
          </CardFooter>  
        </Card>
           )
 }



 export {ArtCard}