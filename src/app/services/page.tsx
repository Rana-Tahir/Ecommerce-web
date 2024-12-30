import Navbar from "@/components/navbar";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import Image from "next/image";
import user1 from "../../../public/team-1-user-1.jpg";
import user2 from "../../../public/team-1-user-2.jpg";
import user3 from "../../../public/team-1-user-3.jpg";
import user4 from "../../../public/team-1-user-4.jpg";
import user5 from "../../../public/team-1-user-5.jpg";
import user6 from "../../../public/team-1-user-6.jpg";
import user7 from "../../../public/team-1-user-7.jpg";
import user8 from "../../../public/team-1-user-8.jpg";
import user9 from "../../../public/team-1-user-9.jpg";

function Services() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />

      <div className="flex flex-col items-center py-4 sm:py-8 md:py-16 bg-white px-4 md:px-8">
        <div className="mb-4 md:mb-8">
          <h5 className="sm:text-lg md:text-xl text-xs text-[#737373] text-center">
            WHAT WE DO
          </h5>
        </div>

        <div className="mb-10 md:mb-12">
          <h1 className="text-6xl sm:text-3xl md:text-4xl font-bold text-center text-[#252b42]">
            Innovation tailored for you
          </h1>
        </div>

        <div className="flex items-center gap-2 mb-14">
          <div className="flex items-center gap-3">
            <span className="font-Montserrat font-bold text-sm text-[#252B42]">
              Home
            </span>
            <FaArrowRight className="text-sm" />
            <span className="font-Montserrat font-bold text-sm text-[#BDBDBD]">
              Shop
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 w-full max-w-[1440px] mx-auto px-4 mb-12">
          <div className="col-span-1 sm:col-span-2 relative group">
            <img
              src="../heroimage-3.png"
              alt="Women's Fashion"
              className="w-full h-[250px] sm:h-[400px] lg:h-[500px] object-cover rounded-lg transition-transform duration-300 hover:scale-[1.02]"
            />
          </div>

          <div className="flex flex-col gap-3 sm:gap-4">
            <div className="relative group">
              <img
                src="../heroimage-2.png"
                alt="Women's Fashion"
                className="w-full h-[150px] sm:h-[190px] lg:h-[242px] object-cover rounded-lg transition-transform duration-300 hover:scale-[1.02]"
              />
            </div>

            <div className="relative group">
              <img
                src="../heroimage-1.png"
                alt="Accessories"
                className="w-full h-[150px] sm:h-[190px] lg:h-[242px] object-cover rounded-lg transition-transform duration-300 hover:scale-[1.02]"
              />
            </div>
          </div>

          <div className="flex flex-col gap-3 sm:gap-4">
            <div className="relative group">
              <img
                src="../heroimage-5.png"
                alt="Kids Fashion"
                className="w-full h-[150px] sm:h-[190px] lg:h-[242px] object-cover rounded-lg transition-transform duration-300 hover:scale-[1.02]"
              />
            </div>

            <div className="relative group">
              <img
                src="../heroimage-4.png"
                alt="Kids Fashion"
                className="w-full h-[150px] sm:h-[190px] lg:h-[242px] object-cover rounded-lg transition-transform duration-300 hover:scale-[1.02]"
              />
            </div>
          </div>
        </div>
        <section className="w-full py-8 md:py-16">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-lg mx-auto mb-8 md:mb-16">
              <h2 className="text-2xl md:text-4xl font-bold text-[#252B42] mb-4">
                Meet Our Team
              </h2>
              <p className="text-sm md:text-base text-[#737373]">
                Problems trying to resolve the conflict between the two major
                realms of Classical physics: Newtonian mechanics
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
              {[
                user1,
                user2,
                user3,
                user4,
                user5,
                user6,
                user7,
                user8,
                user9,
              ].map((user, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <div className="w-full h-[200px] md:h-[230px] relative">
                    <Image
                      src={user}
                      alt={`Team Member ${index + 1}`}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <div className="p-4 md:p-6 text-center">
                    <h5 className="text-lg md:text-xl font-bold text-[#252B42] mb-2">
                      John Doe
                    </h5>
                    <h6 className="text-sm font-semibold text-[#737373] mb-4">
                      Software Engineer
                    </h6>
                    <div className="flex justify-center gap-4">
                      {/* Social icons */}
                      <div className="flex gap-6">
                        <FaFacebook className="text-[#23A6F0] text-xl" />
                        <FaInstagram className="text-[#23A6F0] text-xl" />
                        <FaTwitter className="text-[#23A6F0] text-xl" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-white">
          <div className="container mx-auto px-4">
            {/* Footer content remains the same but with improved responsive classes */}

{/* Top Section */}
<section className="bg-[#ffffff] py-10">
            <div className="max-w-screen-xl mx-auto flex justify-between items-center">
              <div className="flex flex-col">
                <h1 className="text-[#252b42] text-2xl font-bold leading-loose tracking-tight">
                  Bandage
                </h1>
              </div>
              <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                <a className="text-[#23A6F0] text-xl">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                  </svg>
                </a>
                <a className="ml-3 text-[#23A6F0] text-xl">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
                  </svg>
                </a>
                <a className="ml-3 text-[#23A6F0] text-xl">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                  </svg>
                </a>
              </span>
            </div>
          </section>

          {/* Divider */}
          <div className="border-t border-[#e6e6e6]" />

            <div className="py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">

          {/* Company Info */}
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
                <h2 className="text-[#252b42] text-base font-bold">
                  Resources
                </h2>
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
                      className="w-full h-12 px-4 rounded-lg bg-[#f8f8f8] text-[#727272] text-sm font-normal"
                      placeholder="Your Email"
                    />
                    <button className="absolute right-0 top-0 h-12 px-4 bg-[#23a6f0] text-white text-sm font-normal rounded-r-lg hover:bg-opacity-70">
                      Subscribe
                    </button>
                  </div>
                  <p className="text-[#727272] text-xs">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
            </div>

            </div>
          </div>

          <div className="bg-[#FAFAFA] py-4">
            <div className="container mx4">
              <p className="text-center md:text-left text-sm text-[#727272]">
                Made with love by Finland. All rights reserved.
              </p>
            </div>
          </div>
        </footer>

      </div>
    </div>
  );
}

export default Services;
