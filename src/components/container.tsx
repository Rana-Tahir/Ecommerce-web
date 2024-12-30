import React from 'react'

function Container() {
  return (
    <div>
        <section className="text-gray-600 body-font bg-white">
  <div className="container mx-auto flex px-16 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full mb-10 md:mb-0 sm:w-full">
      <img
        className="object-cover object-center rounded h-[700px]"
        alt="hero"
        src="../asianwomen.png"
      />
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
    <div className="text-gray-400 mb-10">
          Summer 2020
    </div>
      <h1 className="title-font text-6xl mb-4 font-bold text-gray-900">
       Part of the Neural 
        <br className="hidden lg:inline-block" />
        Universe
      </h1>
      <p className="mb-2 leading-relaxed ">
      We know how large objects will act, 
      </p>
      <p className="mb-8 leading-relaxed"> 
      but things on a small scale.
      </p>
      <div className="flex justify-center">
        <button className="inline-flex text-white bg-[#2DC071] border-0 py-2 px-10 focus:outline-none hover:bg-green-700 rounded-md text-lg">
          Buy now
        </button>
        <button className="ml-4 inline-flex text-[#2DC071] bg-white border-4 py-2 px-10  hover:bg-green-500 rounded-md text-lg hover:text-white">
          Read more
        </button>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default Container