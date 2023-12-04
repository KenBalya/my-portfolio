import React from 'react'
import Image from "next/image";
const Sun = () => {
  return (
    <div className="flex items-center justify-evenly bg-cover bg-center scale-50 md:scale-100">
    <Image
    src="/sun2.gif"
    alt="Matahari"
    width={500}
    height={500}
    
  />
 
</div>
  )
}

export default Sun
