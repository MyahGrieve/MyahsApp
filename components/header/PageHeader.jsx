 function PageHeader ( {title, tagline}){
    return (
        <header className=" w-fit mx-auto">
            <h1 className="text-6xl lg:text-6xl font-bold  align-middle  pb-5 w-full">{title}</h1>
            <p>{tagline}</p>
        </header>
    )
 }



 export {PageHeader}