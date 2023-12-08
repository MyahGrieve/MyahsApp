
import { Card, CardBody } from "@nextui-org/react";
import { MdErrorOutline } from "react-icons/md";
import { Button } from "@nextui-org/react";
import Link from "next/link";

export default function Cancelled() { 

  return ( 
    <div className="flex  justify-center align-middle ">
    <Card className="m-10 p-10 md:w-1/2">
      <CardBody className="">
        <div className="flex flex-col  items-center">
      <MdErrorOutline className="text-7xl m-10" />
      <h2 className="text-3xl tracking-light mb-2 font-bold">Order Cancelled</h2>
      <p>The payment was declined by your bank.</p>
        <Link href="/items/multiple-items">
      <Button size="lg" className=" tracking-light bg-black text-white p-5 m-10">Return to Store</Button>
      </Link>
      </div>
      </CardBody>
    </Card>
    </div>
  );
}


