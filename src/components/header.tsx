"use client";


import React, { useState } from "react";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { FiPhone, FiSearch } from "react-icons/fi";
import { MdOutlineMailOutline, MdOutlineShoppingCart } from "react-icons/md";
import { RiMenu3Fill } from "react-icons/ri";
import { CiHeart } from "react-icons/ci";
import Link from "next/link";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b mx-auto flex flex-col">
      {/* Top Bar */}
      <div className="bg-[#252b42] text-white py-2 text-sm flex flex-col md:flex-row justify-between items-center px-4 md:px-8 w-full">
        <div className="text-center flex flex-col md:flex-row justify-center items-center md:pl-2 space-y-2 md:space-y-0">
          <div className="flex items-center">
            <FiPhone className="mr-2" />
            <span>(225) 555-0118</span>
          </div>
          <div className="flex items-center md:ml-8">
            <MdOutlineMailOutline className="text-2xl mr-2" />
            <span>michelle.rivera@example.com</span>
          </div>
        </div>

        <div className="hidden md:block">
          Follow Us and get a chance to win 80% off
        </div>

        <div className="text-center flex flex-wrap justify-center items-center space-x-1 mt-2 md:mt-0">
          <span className="hidden md:inline">Follow Us:</span>
          <div className="flex justify-center items-center space-x-2">
            <FaInstagram />
            <FaYoutube />
            <FaFacebook />
            <FaTwitter />
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <div className="py-4 px-4 md:px-8">
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold text-[#252B42]">Bandage</div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden "
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <RiMenu3Fill className="text-2xl text-[#737373] " />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6 sm:flex justify-center items-center">
          <Link href={'/'} className="hover:text-blue-500 text-[#737373]">Home</Link>
          <Link href={'/shop'} className="hover:text-blue-500 text-[#737373]">Shop</Link>            
            <span>
              {" "}
              <FaAngleDown className="text-[#737373] pt-1" />{" "}
            </span>
            <Link href={'/about'} className="hover:text-blue-500 text-[#737373]">About</Link>
            <Link href={'/blog'} className="hover:text-blue-500 text-[#737373]">Blog</Link>
            <Link href={'/contact'} className="hover:text-blue-500 text-[#737373]">Contact</Link> 
            <Link href={'/pages'} className="hover:text-blue-500 text-[#737373]">Pages</Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center text-[#23A6F0]">
              <FaRegUser className="mr-1" />
              <span>Login / Register</span>
            </div>
            <FiSearch className="text-xl text-[#23A6F0]" />
            <div className="flex items-center">
              <MdOutlineShoppingCart className="text-xl text-[#23A6F0]" />
              <span className="ml-1 text-[#23A6F0]">1</span>
            </div>
            <div className="flex items-center">
              <CiHeart className="text-lg text-[#23A6F0]" />
              <span className="ml-1 text-[#23A6F0]">1</span>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4 text-[#737373]">
            <nav className="flex flex-col space-y-2 text-xl ">
            <Link href={'/'} className="hover:text-blue-500 text-[#737373]">Home</Link>
            <Link href={'/shop'} className="hover:text-blue-500 text-[#737373]">Shop</Link>
            <Link href={'/about'} className="hover:text-blue-500 text-[#737373]">About</Link>
            <Link href={'/blog'} className="hover:text-blue-500 text-[#737373]">Blog</Link>
            <Link href={'/contact'} className="hover:text-blue-500 text-[#737373]">Contact</Link> 
            <Link href={'/pages'} className="hover:text-blue-500 text-[#737373]">Pages</Link>
            </nav>

          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
