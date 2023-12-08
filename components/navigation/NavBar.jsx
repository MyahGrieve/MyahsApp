import Link from "next/link" 
// import {FiCloudLightning} from "react-icons/fi"
// import {FiCoffee} from "react-icons/fi"
import {FaGithubAlt} from "react-icons/fa"
 
 function NavBar ( {children}){
    return (
       <nav className=" py-4">
        <ul className="flex justify-center items-center gap-x-8">
        
            <li>
               <Link  href="/">
               Home
                  </Link>
                  </li>
            <li><Link  href="/items/multiple-items">
               Art
            </Link>
           </li>
           <li><Link  href="https://github.com/MyahGrieve/MyahsApp" target="_blank">
               <FaGithubAlt/>
            </Link>
           </li>

        </ul>
       </nav>
    )
 }



 export {NavBar}