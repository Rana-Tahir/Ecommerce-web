import React from 'react'

function Editorchoice() {
  return (
    <div className='flex flex-col items-center py-16 bg-white'>
      <div className='mb-4'>
        <h2 className='text-xl font-bold text-[#252B42]'>
          EDITOR'S PICK
        </h2>
      </div>
      
      <div className='mb-8'>
        <p className='text-sm text-gray-600 max-w-md text-center'>
          Problems trying to resolve the conflict between 
        </p>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[30px]">
        {/* Large Box 1 */}
        <div className='col-span-2 relative group'>
          <img 
            src="../Men.png" 
            alt="Men's Fashion" 
            className='w-full h-[500px] object-cover'
          />
          <button className='absolute bottom-4 left-4 bg-white text-gray-400 px-8 py-2 rounded-md hover:bg-gray-50'>
            MEN
          </button>
        </div>

        {/* Women Section */}
        <div className='flex flex-col gap-4'>
          <div className='relative group'>
            <img 
              src="../Women.png" 
              alt="Women's Fashion" 
              className='w-full h-[500px] object-cover'
            />
            <button className='absolute bottom-4 left-4 bg-white text-gray-400 px-8 py-2 rounded-md hover:bg-gray-50'>
              WOMEN
            </button>
          </div>
        </div>

        {/* Accessories and Kids Column */}
        <div className='flex flex-col gap-4'>
          <div className='relative group'>
            <img 
              src="../Women2.png" 
              alt="Accessories" 
              className='w-full h-[242px] object-cover'
            />
            <button className='absolute bottom-4 left-4 bg-white text-gray-400 px-8 py-2 rounded-md hover:bg-gray-50'>
              ACCESSORIES
            </button>
          </div>

          <div className='relative group'>
            <img 
              src="../Kids.png" 
              alt="Kids Fashion" 
              className='w-full h-[242px] object-cover'
            />
            <button className='absolute bottom-4 left-4 bg-white text-gray-400 px-8 py-2 rounded-md hover:bg-gray-50'>
              KIDS
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Editorchoice
