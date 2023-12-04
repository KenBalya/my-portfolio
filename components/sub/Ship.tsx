import React from 'react'
import Image from "next/image";
const Ship = () => {
  return (
    <div className="flex flex-wrap items-center justify-evenly bg-cover bg-center space-y-4">
    <Image
    src="/ship1.gif"
    alt="Planet pertama"
    width={300}
    height={300}
    
  />
  <Image
    src="/ship3.gif"
    alt="Planet kedua"
    width={300}
    height={300}
    
  />
  <Image
    src="/ship2.gif"
    alt="Planet kedua"
    width={200}
    height={200}
    
  />
</div>
  )
}

export default Ship
