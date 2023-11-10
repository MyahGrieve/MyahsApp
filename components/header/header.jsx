import '@/css/globals.css'
import {IoPlanetSharp} from 'react-icons/io5'

export default function Header() {
    return (
        <header className='flex justify-center space-x-1'>
            <IoPlanetSharp className="text-6xl text-center pt-3"/>
            <h1 className="text-4xl font-semibold tracking-tight pt-3">Astral Art</h1>
        </header>
    );
}
   