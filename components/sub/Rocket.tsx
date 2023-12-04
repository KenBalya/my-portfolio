import React from 'react'
import Image from "next/image";
const Rocket = () => {
  return (
    <div className="flex items-start  justify-evenly bg-cover bg-center scale-50 md:scale-100">
    <Image
    src="/rocket.gif"
    alt="Roket"
    width={200}
    height={200}
    
  />
  
</div>
  )
}

export default Rocket
