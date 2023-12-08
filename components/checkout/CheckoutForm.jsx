import { Button } from "@nextui-org/react"


 
 function CheckoutForm ( {price_id}){
   
 
    const details={
        id:"from dashboard",
        quanity:2,
        price:"from dashboard"
    }

  console.log(price_id)
    return (
        <form action='/api/checkout' method="POST" >
            <input type="hidden" name="id" value="from dashboard"  />
            <input type="hidden" name="price" value={price_id} />
            <Button type="suBmit" id="checkout-button" radius="full" className="tracking-light bg-black text-white w-full">Checkout</Button>
            {/* <button type="submit" id="checkout-button" radius="full" className="tracking-light bg-black text-white w-full">Add to Cart</button> */}

        </form>
        
        
    )
    
 }



 export {CheckoutForm}
 