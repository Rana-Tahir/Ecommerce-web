import Image from "next/image";
import Navbar from "../../components/navbar";
import GreenHeader from "../../components/green-header";
import cat1 from "../../../public/card-item.png";
import cat2 from "../../../public/card-item (1).png";
import cat3 from "../../../public/card-item (2).png";
import cat4 from "../../../public/card-item (3).png";
import cat5 from "../../../public/card-item (4).png";
import { FaArrowRight, FaTwitter } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import frame from "../../../public/Frame 31.png";
import clients from "../../../public/desktop-clients-1.png";
import pic9 from "../../../public/product-cover-5 (8).png";
import pic10 from "../../../public/product-cover-5 (9).png";
import pic11 from "../../../public/product-cover-5 (10).png";
import pic12 from "../../../public/product-cover-5 (11).png";
import pic13 from "../../../public/product-cover-5 (12).png";
import pic14 from "../../../public/product-cover-5 (13).png";
import pic15 from "../../../public/product-cover-5 (14).png";
import pic16 from "../../../public/product-cover-5 (15).png";
import pic17 from "../../../public/product-cover-5 (16).png";
import pic18 from "../../../public/product-cover-5 (17).png";
import pic19 from "../../../public/product-cover-5 (18).png";
import pic20 from "../../../public/product-cover-5 (19).png";
import CardText from "../../components/cards-text";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export default function () {
  return (
    <div className="w-full min-h-screen">
      <GreenHeader />
      <Navbar />
      
    {/* Shop Section */}
<div className="hidden sm:block w-full px-4 py-6 md:py-8 lg:py-10">
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
    <div className="mb-4 md:mb-0">
      <h2 className="font-Montserrat font-bold text-2xl text-[#252B42] text-center md:text-left">
        Shop
      </h2>
    </div>
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-3">
        <span className="font-Montserrat font-bold text-sm text-[#252B42]">Home</span>
        <FaArrowRight className="text-sm " />
        <span className="font-Montserrat font-bold text-sm text-[#BDBDBD] ">Shop</span>
      </div>
    </div>
  </div>
</div>

      {/* Category Section */}
      <div className="w-full bg-[#FAFAFA] py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[cat1, cat2, cat3, cat4, cat5].map((cat, index) => (
              <div key={index} className="w-full">
                <Image src={cat} alt={`category-${index + 1}`} className="w-full h-auto" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Popularity Section */}
      <div className="w-full py-6">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-[#737373] font-montserrat font-bold">
              Showing all 12 results
            </div>
            
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="text-sm text-[#737373] font-Montserrat font-bold">Views:</span>
                <Image src={frame} alt="frame" className="h-8 w-auto" />
              </div>
              
              <div className="flex gap-2">
                <button className="px-4 py-2 border border-[#DDDDDD] flex items-center gap-2">
                  <span className="text-sm text-[#737373]">Popularity</span>
                  <IoIosArrowDown />
                </button>
                <button className="px-4 py-2 bg-[#23A6F0] text-white text-sm font-bold">
                  Filter
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Clients Section */}
      <div className="w-full">
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


      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[pic9, pic10, pic11, pic12, pic13, pic14, pic15, pic16, pic17, pic18, pic19, pic20].map((pic, index) => (
            <div key={index} className="w-full">
              <div className="flex flex-col items-center">
                <Image src={pic} alt={`product-${index + 9}`} className="w-full h-auto" />
                <CardText />
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-12">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" className="font-bold" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" className="text-2xl">1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" className="font-bold" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>


    </div>
  );
}
