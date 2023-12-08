'use client'
 
import { createCheckoutSession } from "@/app/actions/stripe";
 
 function BuyNowButton ( {price, id, className}){
   
 
    const details={
     
        quanity:2,
        price:"Enter A Price ID From Stripe"
    }

 
    return (
        <form className="flex sm:items-start sm:gap-x-4  flex-col sm:flex-row" action='/api/checkout' method="POST" >
      
            <input type="hidden" name="price" value="Enter A Price ID From Stripe" />
            {/* <button type="button"   className="flex-1 bg-blue-50   sm:text-[14px] font-medium border border-blue-50  shadow-sm shadow-blue-200/75   rounded-lg  py-1.5   text-blue-500   "  >Buy Now</button> */}
            <button type="button" disabled className="flex-1 bg-blue-50   sm:text-[14px] font-medium border border-blue-50  shadow-sm shadow-blue-200/75   rounded-lg  py-1.5   text-blue-500  "  >Bridge Club </button>
            
        </form>
    )
 }



 export {BuyNowButton}

