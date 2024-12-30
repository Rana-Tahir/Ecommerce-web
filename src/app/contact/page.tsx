import Image from "next/image";
import Navbar from "@/components/navbar";
import girl from "../../../public/desktop-header.png";
import { FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io";

function Contact() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <div className="relative px-4 md:px-8">
        {/* First Section */}
        <div className="w-full max-w-[1050px] mx-auto flex flex-col items-start gap-8 md:gap-20 py-8 md:py-28">
          <div className="flex flex-col md:flex-row items-center gap-8 w-full">
            {/* Column 1 */}
            <div className="flex flex-col items-center md:items-start gap-6 w-full md:w-1/2">
              <h5 className="text-sm font-bold text-[#252B42] font-Montserrat">
                CONTACT US
              </h5>
              <h1 className="text-3xl md:text-5xl font-bold text-[#252B42] text-center font-Montserrat md:text-left">
                Get in touch today!
              </h1>
              <h4 className="text-base md:text-xl font-Montserrat text-[#737373] text-center md:text-left max-w-sm">
                We know how large objects will act, but things on a small scale
              </h4>
              <h3 className="text-base md:text-2xl text-[#252B42] font-Montserrat text-center md:text-left max-w-sm font-bold">
                Phone: +451 215 215
              </h3>
              <h3 className="text-base md:text-2xl text-[#252B42] font-Montserrat text-center md:text-left max-w-sm font-bold">
                Fax: +451 215 215
              </h3>
              <div className="flex justify-center md:justify-start items-center space-x-4">
                <FaTwitter className="text-2xl cursor-pointer hover:text-[#23A6F0]" />
                <IoLogoFacebook className="text-2xl cursor-pointer hover:text-[#23A6F0]" />
                <FaInstagram className="text-2xl cursor-pointer hover:text-[#23A6F0]" />
                <FaLinkedin className="text-2xl cursor-pointer hover:text-[#23A6F0]" />
              </div>
            </div>

            {/* Column 2 */}
            <div className="w-full md:w-1/2">
              <Image
                src={girl}
                alt="girl"
                className="w-full h-auto object-contain"
                priority
              />
            </div>
          </div>
        </div>

        {/* Visit Our Office Section */}
        <section className="relative bg-white py-12">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h5 className="text-sm md:text-base font-bold text-[#252B42]">
                VISIT OUR OFFICE
              </h5>
              <p className="text-2xl md:text-4xl font-bold text-[#252b42] mt-2">
                We help small businesses
                <br />
                with big ideas
              </p>
            </div>
          </div>
        </section>

        {/* Cards Section */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {/* Card 1 */}
              <div className="card bg-white shadow-xl  rounded-lg w-[450px] h-[400px] ">
                <div className="flex flex-col items-center">
                  {/* Phone Icon SVG */}
                  <svg
                    className="w-16 h-16 text-[#23A6F0] mt-12"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M18.427 14.768L17.2 13.542a1.733 1.733 0 00-2.45 0l-.613.613a1.732 1.732 0 01-2.45 0l-1.838-1.84a1.735 1.735 0 010-2.452l.612-.613a1.735 1.735 0 000-2.452L9.237 5.572a1.6 1.6 0 00-2.45 0c-3.223 3.2-1.702 6.896 1.519 10.117 3.22 3.221 6.914 4.745 10.12 1.535a1.601 1.601 0 000-2.456z"
                    />
                  </svg>
                  <div className="mt-6 text-center">
                    <p className="text-[#252B42]">georgia.young@example.com</p>
                    <p className="text-[#252B42]">georgia.young@ple.com</p>
                    <p className="font-bold mt-6">Get Support</p>
                    <button className="mt-4 px-6 py-2 border-2 border-[#23A6F0] text-[#23A6F0] rounded-md hover:bg-[#23A6F0] hover:text-white transition-colors">
                      Submit Request
                    </button>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="card bg-[#252B42] shadow-xl  rounded-lg w-[450px] h-[450px] ">
                <div className="flex flex-col items-center">
                  {/* Map pin Icon SVG */}
                  <svg
                    className="w-20 h-20 text-[#23A6F0]  dark:text-white mt-16"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                       strokeLinecap="round"
                       strokeLinejoin="round"
                       fillRule="evenodd"
                      d="M11.906 1.994a8.002 8.002 0 0 1 8.09 8.421 7.996 7.996 0 0 1-1.297 3.957.996.996 0 0 1-.133.204l-.108.129c-.178.243-.37.477-.573.699l-5.112 6.224a1 1 0 0 1-1.545 0L5.982 15.26l-.002-.002a18.146 18.146 0 0 1-.309-.38l-.133-.163a.999.999 0 0 1-.13-.202 7.995 7.995 0 0 1 6.498-12.518ZM15 9.997a3 3 0 1 1-5.999 0 3 3 0 0 1 5.999 0Z"
                      clipRule="evenodd"
                    />
                  </svg>

                  <div className="mt-6 text-center">
                    <p className="text-white">georgia.young@example.com</p>
                    <p className="text-white">georgia.young@ple.com</p>
                    <p className="font-bold mt-6 text-white">Get Support</p>
                    <button className="mt-4 px-6 py-2 border-2 border-[#23A6F0] text-[#23A6F0] rounded-md hover:bg-[#23A6F0] hover:text-white transition-colors">
                      Submit Request
                    </button>
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="card bg-white shadow-xl rounded-lg w-[450px] h-[400px] mr-10">
                <div className="flex flex-col items-center">
                  {/* Email Icon SVG */}
                  <svg
                    className="w-20 h-20 text-[#23A6F0]  dark:text-white mt-12"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M2.038 5.61A2.01 2.01 0 0 0 2 6v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6c0-.12-.01-.238-.03-.352l-.866.65-7.89 6.032a2 2 0 0 1-2.429 0L2.884 6.288l-.846-.677Z" />
                    <path d="M20.677 4.117A1.996 1.996 0 0 0 20 4H4c-.225 0-.44.037-.642.105l.758.607L12 10.742 19.9 4.7l.777-.583Z" />
                 </svg>

                  <div className="mt-6 text-center">
                    <p className="text-[#252B42]">georgia.young@example.com</p>
                    <p className="text-[#252B42]">georgia.young@ple.com</p>
                    <p className="font-bold mt-6">Get Support</p>
                    <button className="mt-4 px-6 py-2 border-2 border-[#23A6F0] text-[#23A6F0] rounded-md hover:bg-[#23A6F0] hover:text-white transition-colors">
                      Submit Request
                    </button>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Let's Talk Section */}
        <div className="text-center py-12 bg-white">
          <p className="text-sm md:text-base font-bold text-[#252b42]">
            WE CAN'T WAIT TO MEET YOU
          </p>
          <h1 className="text-3xl md:text-6xl font-bold text-[#252b42] mt-4">
            Let's Talk
          </h1>
          <button className="mt-6 px-8 py-3 bg-[#23A6F0] text-white rounded-md hover:bg-opacity-80 transition-colors">
            Try it free now
          </button>
        </div>

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

export default Contact;
