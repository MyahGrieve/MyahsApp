import { getArt } from "@/lib/firebase/getArt";
import { Button, Tooltip } from "@nextui-org/react";
import {FaLeaf} from "react-icons/fa"
import { CheckoutForm } from "@/components/checkout/CheckoutForm";

async function getSingleItem(id) {
    const payload = await getArt();
    const art = Object.values(payload)
    const singleItem = art.find(art => art.id == id)
    return singleItem
}

async function ArtPage ({params}) {
    
    const id = params.id
    const item = await getSingleItem(id)

    console.log(item.price)
    
    return (
        
<div className="m-4 flex flex-col justify-center items-center my-10 md:my-20">
 
    <div class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row max-w-5xl  dark:border-gray-700 dark:bg-gray-800">
        <img class="p-5   h-96 md:h-auto md:w-1/2 " src={item.image} alt=""></img>

        <div class="flex flex-col justify-between p-4 leading-normal">
            <div className="mb-3 ">
                <div className="flex items-center justify-between">
            <h5 class="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white ">{item.title}</h5>
            {item.eco && (
                 <Tooltip  content={
                    <div className="px-1 py-2">
                      <div className="text-tiny">This artwork is created using sustainable materials and uses carbon-neutral shipping</div>
                    </div>
                  }>
                <Button size="sm" className="bg-lime-200 border-green-700 mr-3">
                eco-choice
                <FaLeaf fill="#77bf78"></FaLeaf>
            </Button>
            </Tooltip>
            )}
            
           </div>
            <p className="tracking-light font-semi-bold mb-3 text-xs">by <span className="font-semibold">{item.artist}</span></p>      
            <p className="mb-1 text-xl font-bold">{item.price}</p>
            <p className="mb-3 text-sm">{item.width}" X {item.height}"</p>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{item.description}</p>
            <p><span className="font-bold text-sm mb-1">Medium: </span>{item.medium}</p>
            <p><span className="font-bold text-sm">Subject: </span>{item.subject}</p>
            </div>
            {item.availability ? (
              <CheckoutForm price_id={item.price_id}/>
            
        ) : (
            <button className="disabled:opacity-50 cursor-not-allowed bg-gray-300 text-gray-600 rounded-full px-6 py-2">Sold Out!</button>
            
        )}
        </div>
    </div>
</div>

   
    );
}

export default ArtPage