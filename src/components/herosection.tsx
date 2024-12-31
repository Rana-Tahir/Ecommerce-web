import React from 'react'

function Herosection() {
  return (
    <div className="h-[760px] w-full relative"   >      
        <img 
          src="../Heroimage.png" 
          alt="New Collection" 
          className="w-full h-auto object-cover absolute top-0 left-0"
        />    

      {/* Text Content */}
      <div className="flex flex-col space-y-6 pt-20 max-w-2xl gap-x-2 ml-24 relative z-10">
        <div className="text-white pt-24">
          Summer 2020
        </div>
        
        <h1 className="sm:text-2xl md:text-4xl lg:text-5xl font-bold leading-snug text-white">
          NEW COLLECTION
        </h1>
                
        <p className="font-bold leading-snug text-gray-200 max-w-md pt-2 text-[20px]">
          We know how large objects will act, but things on a small scale.
        </p>
        
        <button className='text-white rounded-md bg-green-500 px-12 py-2 w-fit hover:bg-green-600 transition-colors'>
          Shop Now
        </button>
      </div>
    </div>
  )
}

export default Herosection
