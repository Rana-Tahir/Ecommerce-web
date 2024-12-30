import GreenHeader from "../../components/green-header";
import Navbar from "../../components/navbar";
import Image from "next/image";
import { FaAngleDown } from "react-icons/fa";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import home from "../../../public/unsplash_QANOF9iJlFs.png";
import { IoEyeSharp } from "react-icons/io5";
import mainImage from "../../../public/single-product-1-cover-2.jpg"; 
import image1 from "../../../public/single-product-1-thumb-1.jpg";
import image2 from "../../../public/single-product-1-thumb-2.jpg";
import { CiHeart } from "react-icons/ci";
import { MdOutlineShoppingCart } from "react-icons/md";
import clients from "../../../public/desktop-clients-1.png";
import pc from "../../../public/product-cover-5 (20).png";
import pic10 from "../../../public/product-cover-5 (21).png";
import pic11 from "../../../public/product-cover-5 (22).png";
import pic12 from "../../../public/product-cover-5 (23).png";
import pic13 from "../../../public/product-cover-5 (24).png";
import pic14 from "../../../public/product-cover-5 (25).png";
import pic15 from "../../../public/product-cover-5 (26).png";
import pic16 from "../../../public/product-cover-5 (21).png";


export default function Pages() {
  return (
    <div>
      <GreenHeader />
      <Navbar />
      <div className="w-[1440px] h-[92px] py-[24px] bg-[#FAFAFA]">
        <div className="w-[1033px] h-[44px] absolute top-[190px] left-[130px] flex gap-[30px]">
          <div className="flex items-center gap-[15px]">
            <div className="font-Montserrat font-bold text-[14px] leading-[24px] text-[#252B42]">
              Home
            </div>
            <FaAngleDown />
            <h6 className="font-Montserrat font-bold text-[14px] leading-[24px] text-[#BDBDBD]">
              Shop
            </h6>
          </div>
        </div>
      </div>

      {/* Product Section */}
      <div className="container mx-auto px-4 py-12 flex flex-col md:flex-row gap-8 font-Montserrat">
        {/* Left Section - Image Slider */}
        <div className="flex-1">
          <div className="relative ml-16">
            <Image
              src={mainImage}
              alt="Product Image"
              className="rounded-lg"
              width={600}
              height={400}
            />
            {/* Arrows */}
            <button className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-200 rounded-full p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="h-6 w-6 text-gray-700"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-200 rounded-full p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="h-6 w-6 text-gray-700"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
          {/* Thumbnails */}
          <div className="flex mt-4 gap-4 ml-16">
            <Image
              src={image1}
              alt="Thumbnail 1"
              className="rounded-md cursor-pointer hover:ring-2 hover:ring-blue-500"
              width={100}
              height={100}
            />
            <Image
              src={image2}
              alt="Thumbnail 2"
              className="rounded-md cursor-pointer hover:ring-2 hover:ring-blue-500"
              width={100}
              height={100}
            />
          </div>
        </div>

        {/* Right Section - Product Details */}
        <div className="flex-1">
          <h1 className="text-2xl font-semibold text-gray-800">Floating Phone</h1>
          <div className="flex items-center mt-2">
            <span className="flex items-center text-yellow-400">
              {[...Array(4)].map((_, i) => (
                <svg
                  key={i}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                >
                  <path d="M12 .587l3.668 7.455 8.18 1.19-5.914 5.763 1.396 8.137L12 18.897l-7.33 3.855 1.396-8.137L.152 9.232l8.18-1.19L12 .587z" />
                </svg>
              ))}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="h-5 w-5 text-gray-300"
              >
                <path d="M12 .587l3.668 7.455 8.18 1.19-5.914 5.763 1.396 8.137L12 18.897l-7.33 3.855 1.396-8.137L.152 9.232l8.18-1.19L12 .587z" />
              </svg>
            </span>
            <p className="ml-2 text-sm text-gray-500">(10 Reviews)</p>
          </div>

          <p className="text-xl font-Montserrat font-semibold text-black mt-4">$1,139.33</p>
          <p className="text-sm text-gray-500 mt-2">
            Availability: <span className="text-[#23A6F0] font-medium">In Stock</span>
          </p>

          <p className="text-gray-700 text-[20px] mt-4">Met minim Mollie non desert Alamo est sit cliquey dolor</p>
          <p className="text-gray-700 text-[20px]">do met sent. RELIT official consequent door ENIM RELIT Mollie.</p>
          <p className="text-gray-700 text-[20px]">Excitation venial consequent sent nostrum met.</p>
          <hr />
          
          <div className="border-t border-[#e6e6e6]" />

          <div className="mt-20">
            <h3 className="text-sm font-semibold text-gray-700">Color:</h3>
            <div className="flex items-center gap-2 mt-2">
              <span className='h-[20px] w-[20px] rounded-full display:inline-block bg-[#23A6F0]'></span>
              <span className='h-[20px] w-[20px] rounded-full display:inline-block bg-[#23B56D]'></span>
              <span className='h-[20px] w-[20px] rounded-full display:inline-block bg-[#E77C40] '></span>
              <span className='h-[20px] w-[20px] rounded-full display:inline-block bg-[#252B42]'></span>
            </div>
          </div>

          <div className=" flex items-center gap-4 mt-24">
            <button className="px-6 py-2 bg-[#23A6F0] text-white rounded-md hover:bg-blue-500">
              Select Options
            </button>
            <div className="flex items-center gap-4">
              <CiHeart className="text-xl" />
              <MdOutlineShoppingCart className="text-xl"/>
              <IoEyeSharp className="text-xl"/>
            </div>
          </div>
        </div>
      </div>

      {/* Products Cards */}
      <div className="w-[1051px] h-[72px] flex justify-evenly bottom-[70px] ml-48">
        <span className="font-Montserrat font-semibold text-[14px] leading-[24px] flex justify-center text-[#737373]">Description</span>
        <span className="font-Montserrat font-semibold text-[14px] leading-[24px] flex justify-center text-[#737373]">Additional Information</span>
        <span className="font-Montserrat font-semibold text-[14px] leading-[24px] flex justify-center text-[#737373]">
          Reviews <h1 className="text-sm leading-[24px] text-[#23856D]">(0)</h1>
        </span>
        <span className="w-[1049px] absolute top-[72px] border border-[#ECECEC]"></span>
      </div>
        
      <div className="flex flex-col lg:flex-row px-8 py-12  left-[200px] items-center justify-center ml-12">
        <div className="w-full lg:w-[323px] h-auto flex-shrink-0 rounded-lg overflow-hidden">
          <Image
            src={home}
            alt="Interior Design"
            width={500}
            height={500}
            className="object-cover"
          />
        </div>

        <div className="flex w-full lg:w-[65%] space-y-8 ml-12">
          <div className="w-[332px] space-y-4 flex flex-col gap-[30px]">
            <h2 className="text-[24px] font-Montserrat font-bold text-gray-800">
              the quick fox jumps over
            </h2>
            <p className="text-[#737373] font-Montserrat font-normal text-[14px] leading-[20px]">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
              RELIT official consequent door ENIM RELIT Mollie. Excitation venial
              consequent sent nostrum met.
            </p>
            <p className="text-[#737373] font-Montserrat font-normal text-[14px] leading-[20px]">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
              RELIT official consequent door ENIM RELIT Mollie. Excitation venial
              consequent sent nostrum met.
            </p>
            <p className="text-[#737373] font-Montserrat font-normal text-[14px] leading-[20px]">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
              RELIT official consequent door ENIM RELIT Mollie. Excitation venial
              consequent sent nostrum met.
            </p>
          </div>

          <div className="space-y-6 flex flex-col justify-center gap-[30px] ml-12">
            <div>
              <h3 className="text-[24px] font-semibold font-Montserrat text-gray-800 mb-[20px]">
                the quick fox jumps over
              </h3>
              <ul className="mt-2 space-y-4 text-[#737373] font-Montserrat font-bold text-[14px] leading-[20px]">
                <li className="flex items-center gap-2">
                  <FaAngleDown />
                  the quick fox jumps over the lazy dog
                </li>
                <li className="flex items-center gap-2">
                  <FaAngleDown />
                  the quick fox jumps over the lazy dog
                </li>
                <li className="flex items-center gap-2">
                  <FaAngleDown />
                  the quick fox jumps over the lazy dog
                </li>
                <li className="flex items-center gap-2">
                  <FaAngleDown />
                  the quick fox jumps over the lazy dog
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-[24px] font-bold text-gray-800">
                the quick fox jumps over
              </h3>
              <ul className="mt-2 space-y-4 text-[#737373] font-Montserrat font-bold text-[14px] leading-[20px]">
                <li className="flex items-center gap-2">
                  <FaAngleDown />
                  the quick fox jumps over the lazy dog
                </li>
                <li className="flex items-center gap-2">
                  <FaAngleDown />
                  the quick fox jumps over the lazy dog
                </li>
                <li className="flex items-center gap-2">
                  <FaAngleDown />
                  the quick fox jumps over the lazy dog
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="w-full max-w-7xl mx-auto px-4 py-12 mt-12">
  <h2 className="text-2xl font-bold mb-12 text-[#252B42] ">BESTSELLER PRODUCTS</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 sm:flex-col-1 sm:justify-center sm:items-center">
          {[pc, pic10, pic11, pic12, pic13, pic14, pic15, pic16].map((pic, index) => (
            <div key={index} className="w-[300px] h-[350px] ">
              <div className="flex flex-col items-center">
                <Image src={pic} alt={`product-${index + 9}`} className="w-[250] h-auto" />
                <div className="flex flex-col items-center justify-center gap-[10px]">
      <h5 className="w-full font-Montserrat font-bold text-[16px] leading-[24px] text-center text-[#252B42]">
        Graphic Design
      </h5>
      <p className="w-full font-Montserrat font-bold text-[14px] leading-[24px] text-center text-[#737373]">
        English Department
      </p>
      <div className="w-full px-[3px] py-[5px] flex justify-center gap-[5px]">
        <h5 className="font-Montserrat font-bold text-[16px] leading-[24px] text-[#BDBDBD]">
          $16.48
        </h5>
        <h5 className="font-Montserrat font-bold text-[16px] leading-[24px] text-[#23856D]">
          $6.48
        </h5>
      </div>
    </div>

              </div>
            </div>
          ))}
        </div>
</div>



      {/* Clients Section */}
      <div className="w-full mt-24 bg-gray-200">
        <Image src={clients} alt="clients" className="w-full h-auto" />
      </div>

      {/* Footer */}
      <footer className="w-full bg-white">
        <div className="max-w-7xl mx-auto px-4">
          {/* Top Section */}
          <section className="py-10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <h1 className="text-[#252b42] text-2xl font-bold">Bandage</h1>
              <div className="flex gap-6">
                <FaFacebook className="text-[#23A6F0] text-xl" />
                <FaInstagram className="text-[#23A6F0] text-xl" />
                <FaTwitter className="text-[#23A6F0] text-xl" />
              </div>
            </div>
          </section>
          
          <div className="border-t border-[#e6e6e6]" />

{/* Main Footer */}
<section className="py-12">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
    {/* Footer columns... (keep existing footer content but remove fixed widths) */}
    <div>
    <h2 className="text-[#252b42] text-base font-bold">
      Company Info
    </h2>
    <nav className="flex flex-col gap-2.5 mt-3">
      <a href="#" className="text-[#727272] text-sm font-bold">
        About Us
      </a>
      <a href="#" className="text-[#727272] text-sm font-bold">
        Careers
      </a>
      <a href="#" className="text-[#727272] text-sm font-bold">
        We Are Hiring
      </a>
      <a href="#" className="text-[#727272] text-sm font-bold">
        Blog
      </a>
    </nav>
  </div>

  {/* Legal */}
  <div>
    <h2 className="text-[#252b42] text-base font-bold">Legal</h2>
    <nav className="flex flex-col gap-2.5 mt-3">
      <a href="#" className="text-[#727272] text-sm font-bold">
        Terms of Service
      </a>
      <a href="#" className="text-[#727272] text-sm font-bold">
        Privacy Policy
      </a>
      <a href="#" className="text-[#727272] text-sm font-bold">
        Cookies
      </a>
      <a href="#" className="text-[#727272] text-sm font-bold">
        Refund Policy
      </a>
    </nav>
  </div>

  {/* Features */}
  <div>
    <h2 className="text-[#252b42] text-base font-bold">Features</h2>
    <nav className="flex flex-col gap-2.5 mt-3">
      <a href="#" className="text-[#727272] text-sm font-bold">
        Business Marketing
      </a>
      <a href="#" className="text-[#727272] text-sm font-bold">
        User Analytics
      </a>
      <a href="#" className="text-[#727272] text-sm font-bold">
        Live Chat
      </a>
      <a href="#" className="text-[#727272] text-sm font-bold">
        Unlimited Support
      </a>
    </nav>
  </div>

  {/* Resources */}
  <div>
    <h2 className="text-[#252b42] text-base font-bold">Resources</h2>
    <nav className="flex flex-col gap-2.5 mt-3">
      <a href="#" className="text-[#727272] text-sm font-bold">
        iOS & Android
      </a>
      <a href="#" className="text-[#727272] text-sm font-bold">
        Watch a Demo
      </a>
      <a href="#" className="text-[#727272] text-sm font-bold">
        Customers
      </a>
      <a href="#" className="text-[#727272] text-sm font-bold">
        API
      </a>
    </nav>
  </div>

  {/* Get in Touch */}
  <div>
    <h2 className="text-[#252b42] text-base font-bold">
      Get In Touch
    </h2>
    <div className="mt-3">
      <div className="relative mb-4">
        <input
          type="email"
          className="w-full h-12 px-4 border border-[#e6e6e6] rounded-lg bg-[#f8f8f8] text-[#727272] text-sm font-normal"
          placeholder="Your Email"
        />
        <button className="absolute right-0 top-0 h-12 px-4 bg-[#23a6f0] text-white text-sm font-normal rounded-r-lg">
          Subscribe
        </button>
      </div>
      <p className="text-[#727272] text-xs">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
    </div>
  </div>
  </div>
</section>

{/* Bottom Section */}
<section className="bg-[#FAFAFA] py-4">
  <div className="flex flex-col md:flex-row justify-between items-center gap-4">
    <p className="text-[#727272] text-text-left">
      Made with love by Finland. All rights reserved.
    </p>
  </div>
</section>
          
          </div>
        </footer>

      </div>
  
  );
  }  
