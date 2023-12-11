import { Button } from "@nextui-org/react"



function CheckoutForm({ price_id }) {


    return (
        <>
        {price_id ? (
            <form action='/api/checkout' method="POST" >
            <input type="hidden" name="id" value="from dashboard" />
            <input type="hidden" name="price" value={price_id} />
            <Button type="suBmit" id="checkout-button" radius="full" className="tracking-light bg-black text-white w-full">Checkout</Button>

        </form>
        ) : (
            <Button  radius="full" className="tracking-light bg-black text-white w-full">Checkout</Button>

        )}
        
</>

    )

}



export { CheckoutForm }
