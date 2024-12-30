import React from 'react';

// Define a product type
interface Product {
  id: number;
  image: string;
  title: string;
  department: string;
  originalPrice: string;
  salePrice: string;
}

// Product data
const products: Product[] = [
  {
    id: 1,
    image: "../cover1.png",
    title: "Graphic Design",
    department: "English Department",
    originalPrice: "$16.48",
    salePrice: "$6.48"
  },
  {
    id: 2,
    image: "../cover2.png",
    title: "Graphic Design",
    department: "English Department",
    originalPrice: "$16.48",
    salePrice: "$6.48"
  },
  {
    id: 3,
    image: "../cover3.png",
    title: "Graphic Design",
    department: "English Department",
    originalPrice: "$16.48",
    salePrice: "$6.48"
  },
  {
    id: 4,
    image: "../cover4.png",
    title: "Graphic Design",
    department: "English Department",
    originalPrice: "$16.48",
    salePrice: "$6.48"
  },
  {
    id: 5,
    image: "../cover5.png",
    title: "Graphic Design",
    department: "English Department",
    originalPrice: "$16.48",
    salePrice: "$6.48"
  },
  {
    id: 6,
    image: "../cover6.png",
    title: "Graphic Design",
    department: "English Department",
    originalPrice: "$16.48",
    salePrice: "$6.48"
  },
  {
    id: 7,
    image: "../cover7.png",
    title: "Graphic Design",
    department: "English Department",
    originalPrice: "$16.48",
    salePrice: "$6.48"
  },
  {
    id: 8,
    image: "../cover8.png",
    title: "Graphic Design",
    department: "English Department",
    originalPrice: "$16.48",
    salePrice: "$6.48"
  },

];

// Product Card Component
const ProductCard = ({ product }: { product: Product }) => (
  <div className='flex flex-col gap-4 space-y-4'>
    <div className='relative group'>
      <img 
        src={product.image}
        alt={product.title}
        width={500}
        height={500}
        className='w-full h-[500px] object-cover'
      />
      <div className='text-[#252B42] font-bold flex justify-center items-center mb-2 mt-2'>
        {product.title}
      </div>
      <p className='text-sm text-[#737373] max-w-md text-center'>
        {product.department}
      </p>
      <div className='text-xs text-[#737373] flex justify-center items-center mt-2 font-[Montserrat]'>
        {product.originalPrice}
        <span className='text-[#23856D] ml-2 font-bold'>{product.salePrice}</span>
      </div>
      <div className='flex justify-center items-center mt-2 mb-1 text-xs'>
        <span className='h-[20px] w-[20px] rounded-full display:inline-block bg-[#23A6F0]'></span>
        <span className='h-[20px] w-[20px] rounded-full display:inline-block bg-[#23B56D] ml-1'></span>
        <span className='h-[20px] w-[20px] rounded-full display:inline-block bg-[#E77C40] ml-1'></span>
        <span className='h-[20px] w-[20px] rounded-full display:inline-block bg-[#252B42] ml-1'></span>
      </div>
    </div>
  </div>
);

function Bestseller() {
  return (
    <div className='flex flex-col items-center py-16 bg-white'>
      <div className='mb-2'>
        <p className='text-sm text-gray-600 max-w-md text-center'>
          Featured Products
        </p>
      </div>
      
      <div className='mb-1'>
        <h2 className='text-xl font-bold text-[#252B42]'>
          BESTSELLER PRODUCTS
        </h2>
      </div>
      
      <div className='mb-8'>
        <p className='text-sm text-gray-600 max-w-md text-center'>
          Problems trying to resolve the conflict between 
        </p>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[30px]">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Bestseller;