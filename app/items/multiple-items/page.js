import Link from 'next/link' //special for next, vs an html. refreshes page
//clienbt-side router. can maintain state in the clietn and the server

import { Suspense } from "react";
import {getArt} from '@/lib/firebase/getArt.js'
// import { PageHeader } from '../components/header/PageHeader';
import Image from 'next/image';
import { ArtCard } from '@/components/ui/ArtCard';

//EPLOYEES PAGE - many items, 

//mock get request to api folder to return all the things

//Link element to create a dyanmic route
// function Card({uid, fullname, positon, profileImage}){

//     return (
//         <aside>
//             <h2>{fullname}</h2>
//             <Image
//              src={`/${profileImage}`}
//              width={200}
//              height={200}
//              alt={fullname}
//             />
//             <p>{positon}</p>
//             <p>{uid}</p>
//             <Link className='text-blue-600 font-semibold' href={`/employee/${uid}`}>{fullname} using id: {uid}</Link>
            
//         </aside>
//     )
// }
//(employees)

async function EmployeesPage () {
    const payload = await getArt()
    console.log(payload)
    // const keys = Object.keys(payload)
    const values = Object.values(payload)
    // const entries = Object.entries(payload) //extracting keys from the data (you can get keys and values, and entries(keys and values))
    // const dataLoading = true;

    //CONDITIONAL RENDERING
    // if(dataLoading) {
    //     return <p>the page is still loading</p>
    // }

    // if(!dataLoading) {
    //     return <p>You have the data</p>
    


    //map filter find sort reduce
    //obj.propname assosiative array
    //obj['propname'] -- obj['first_name'] to access it's props
    //array[0] index array

    // keys.map(key=>{
    //     console.log(key)
    // })



    return (
        <>
        {/* <PageHeader title="All Employees Display"/> */}
        <main className='m-10'>
        <div className="gap-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {/* <div > */}
             {/* <Link className=" gap-10 grid grid-cols-2 sm:grid-cols-4"href="/item[id]"> */}
                {
                values.map(item=> <ArtCard key={item.uid} {...item}/>)
            }
             {/* </Link> */}
            </div>
           
        </main>
        </>
    )
}

export default EmployeesPage