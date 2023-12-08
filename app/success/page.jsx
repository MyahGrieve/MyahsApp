import { Card, CardBody } from "@nextui-org/react";
import { FaRegCircleCheck } from "react-icons/fa6";
import { Button } from "@nextui-org/react";
import Link from "next/link";

export default function Success() { 

  return ( 
    <div className="flex  justify-center align-middle ">
    <Card className="m-10 p-10 md:w-1/2">
      <CardBody className="">
        <div className="flex flex-col  items-center">
      <FaRegCircleCheck className="text-7xl m-10" />
      <h2 className="text-3xl tracking-light mb-2 font-bold">Order Confirmed</h2>
      <p>Thank you for your purchase!</p>
      <div className="flex gap-2 mt-10">
        <Button size="lg" className="p-5 tracking-light">View Order</Button>
        <Link href="/items/multiple-items">
      <Button size="lg" className=" tracking-light bg-black text-white p-5">Continue Shopping</Button>
      </Link>
      </div>
      </div>
      </CardBody>
    </Card>
    </div>
  );
}


