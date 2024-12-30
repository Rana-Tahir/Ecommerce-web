import React from 'react'

function Herosection() {
  return (
    <div className="flex items-center justify-between p-6 px-10 bg-[#23856D] ">
      {/* Text Content - Left Side */}
      <div className="flex flex-col space-y-6 w-1/2">
        <div className="text-white opacity-80">
          Summer 2020
        </div>

        <h1 className="sm:text-2xl md:text-4xl lg:text-5xl font-bold leading-snug text-white">
          NEW COLLECTION
        </h1>
        
        <p className="font-bold leading-snug text-gray-400 max-w-md">
          We know how large objects will act, but things on a small scale.
        </p>

        <button className='text-white rounded-md bg-green-400 px-6 py-2 w-fit hover:bg-green-500 transition-colors'>
          Shop Now
        </button>
      </div>

      {/* Image - Right Side */}
      <div className="w-[510px] h-[700px] flex justify-center items-center mr-32 pt-20">
        <img 
          src="../Heroimage2.png" 
          alt="New Collection" 
          className="w-full h-auto object-bottom"
        />
      </div>
    </div>
  )
}

export default Herosection