import React from 'react'
import Image from "next/image";
const Planet = () => {
  return (
    <div className="flex items-center justify-evenly bg-cover bg-center scale-50 md:scale-100">
        <Image
        src="/saturn.gif"
        alt="Planet pertama"
        width={300}
        height={300}
        
      />
      <Image
        src="/jupiter.gif"
        alt="Planet kedua"
        width={300}
        height={300}
        
      />
    </div>
  )
}

export default Planet
