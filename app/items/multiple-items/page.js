import Link from 'next/link' //special for next, vs an html. refreshes page

import { Suspense } from "react";
import {getArt} from '@/lib/firebase/getArt.js'
import Image from 'next/image';
import { ArtCard } from '@/components/ui/ArtCard';
import { PageHeader } from '@/components/header/PageHeader';



async function EmployeesPage () {
    const payload = await getArt()
    console.log(payload)
    const values = Object.values(payload)
   


    return (
        <>
        {/* <PageHeader title="All Employees Display"/> */}
        <main className='m-10'>
            <PageHeader title="Browse the Collection" />
        <div className="gap-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 pt-10">
                {
                values.map(item=> <ArtCard key={item.uid} {...item}/>)
            }
            </div>
           
        </main>
        </>
    )
}

export default EmployeesPage