import React from 'react'
import Image from "next/image";

const Moon = () => {
  return (
    <div className="flex items-center justify-evenly bg-cover bg-center scale-50 md:scale-100">
    <Image
    src="/moon.gif"
    alt="Bulan"
    width={400}
    height={400}
    
  />
  
</div>
  )
}

export default Moon
