import Navbar from "../../components/navbar";
import Image from "next/image";
import girl from "../../../public/hero-2-bg-shape-cover.png";
import user1 from "../../../public/team-1-user-1.jpg";
import user2 from "../../../public/team-1-user-2.jpg";
import user3 from "../../../public/team-1-user-3.jpg";
import cm1 from "../../../public/fa-brands-1.png";
import cm2 from "../../../public/fa-brands-2.png";
import cm3 from "../../../public/fa-brands-3.png";
import cm4 from "../../../public/fa-brands-4.png";
import cm5 from "../../../public/fa-brands-5.png";
import cm6 from "../../../public/fa-brands-6.png";
import girl2 from "../../../public/workingwomen.png";

export default function AboutUs() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <div className="relative px-4 md:px-8">
        {/* First Section */}

        <div className="w-full max-w-[1050px] mx-auto flex flex-col items-start gap-8 md:gap-20 py-8 md:py-28">
          <div className="flex flex-col md:flex-row items-center gap-8 w-full">
            {/* Column 1 */}
            <div className="flex flex-col items-center md:items-start gap-6 w-full md:w-1/2">
              <h5 className="text-sm font-semibold text-[#252B42]">
                ABOUT COMPANY
              </h5>
              <h1 className="text-3xl md:text-5xl font-bold text-[#252B42] text-center md:text-left">
                ABOUT US
              </h1>
              <h4 className="text-base md:text-xl text-[#737373] text-center md:text-left max-w-sm">
                We know how large objects will act, but things on a small scale
              </h4>
              <button className="bg-[#23A6F0] text-white font-bold px-8 py-4 rounded">
                Get Quote Now
              </button>
            </div>

            {/* Column 2 */}

            <Image
              src={girl}
              alt="girl"
              className="absolute lg:block lg:left-[-1px] lg:top-[0px] mb-6"
            />
          </div>
        </div>

        {/* Problems Section */}
        <div className="py-12 md:py-24 mt-[180px]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 max-w-6xl mx-auto px-4">
            <div className="text-center md:text-left">
              <h5 className="text-sm text-[#E74040]">Problems trying</h5>
              <div className="text-2xl md:text-3xl font-bold mt-4">
                <p>Met minim Mollie non desert</p>
                <p>Alamo est sit cliquey dolor</p>
                <p>do met sent.</p>
              </div>
            </div>
            <div className="text-sm text-[#737373] max-w-sm text-center md:text-left">
              <p>
                Problems trying to resolve the conflict between the two major
                realms of Classical physics: Newtonian mechanics
              </p>
            </div>
          </div>
        </div>

        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto flex flex-wrap">
            <div className="lg:w-[950px] h-[600px] mx-auto">
              <div className="flex flex-wrap w-full bg-gray-100 relative mb-4 rounded-md">
                <img
                  alt="gallery"
                  className="w-full object-cover h-full object-center block"
                  src="media bg-cover.png"
                />
                <div className="text-center relative z-10 w-full">
                  <a className="mt-3 text-indigo-500 inline-flex items-center">
                    Learn More
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Responsive Stats Section */}
        <section className="py-12 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="p-4">
                <h2 className="text-4xl md:text-5xl font-bold text-[#252b42]">
                  15K
                </h2>
                <p className="text-sm md:text-base text-[#737373] mt-2">
                  Happy Customers
                </p>
              </div>
              <div className="p-4">
                <h2 className="text-4xl md:text-5xl font-bold text-[#252b42]">
                  150K
                </h2>
                <p className="text-sm md:text-base text-[#737373] mt-2">
                  Monthly Visitors
                </p>
              </div>
              <div className="p-4">
                <h2 className="text-4xl md:text-5xl font-bold text-[#252b42]">
                  15
                </h2>
                <p className="text-sm md:text-base text-[#737373] mt-2">
                  Countries Worldwide
                </p>
              </div>
              <div className="p-4">
                <h2 className="text-4xl md:text-5xl font-bold text-[#252b42]">
                  100+
                </h2>
                <p className="text-sm md:text-base text-[#737373] mt-2">
                  Top Partners
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="relative bg-white py-16">
          <div className="container mx-auto flex flex-col items-center gap-16 px-4">
            {/* Heading */}
            <div className="text-center max-w-lg">
              <h2 className="text-4xl font-bold text-[#252B42]">
                Meet Our Team
              </h2>
              <p className="text-base text-[#737373] mt-4">
                Problems trying to resolve the conflict between
              </p>
              <p className="text-base text-[#737373] ">
                the two major realms of Classical physics: Newtonian mechanics
              </p>
            </div>

            {/* Team Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {/* Card 1 */}
              <div className="flex flex-col items-center bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="w-full h-[230px] relative">
                  <Image
                    src={user1}
                    alt="Team Member 1"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-6 text-center">
                  <h5 className="text-xl font-bold text-[#252B42]">John Doe</h5>
                  <h6 className="text-sm font-semibold text-[#737373]">
                    Software Engineer
                  </h6>
                  {/* Social Media */}
                  <div className="flex justify-center gap-4 mt-4">
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
                          <rect
                            width={20}
                            height={20}
                            x={2}
                            y={2}
                            rx={5}
                            ry={5}
                          />
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
                </div>
              </div>

              {/* Card 2 */}
              <div className="flex flex-col items-center bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="w-full h-[230px] relative">
                  <Image
                    src={user2}
                    alt="Team Member 2"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-6 text-center">
                  <h5 className="text-xl font-bold text-[#252B42]">
                    Jane Smith
                  </h5>
                  <h6 className="text-sm font-semibold text-[#737373]">
                    Marketing Head
                  </h6>
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
                        <rect
                          width={20}
                          height={20}
                          x={2}
                          y={2}
                          rx={5}
                          ry={5}
                        />
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
              </div>

              {/* Card 3 */}
              <div className="flex flex-col items-center bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="w-full h-[230px] relative">
                  <Image
                    src={user3}
                    alt="Team Member 3"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-6 text-center">
                  <h5 className="text-xl font-bold text-[#252B42]">
                    Emily Rose
                  </h5>
                  <h6 className="text-sm font-semibold text-[#737373]">
                    UI/UX Designer
                  </h6>
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
                        <rect
                          width={20}
                          height={20}
                          x={2}
                          y={2}
                          rx={5}
                          ry={5}
                        />
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
              </div>
            </div>
          </div>
        </section>

        {/* COMPANIES SECTION */}
        <section className="bg-gray-100 py-20 flex justify-center">
          <div className="w-full max-w-6xl flex flex-col gap-[24px] items-center px-4 md:px-8">
            {/* Heading Section */}
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Big Companies Are Here
              </h2>
              <p className="text-gray-600 text-sm md:text-base max-w-lg mx-auto">
                Problems trying to resolve the conflict between the two major
                realms of Classical physics: Newtonian mechanics
              </p>
            </div>

            {/* Logo Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 w-full">
              <div className="flex justify-center">
                <Image src={cm1} alt="Client 1 Logo" className="h-12 w-auto" />
              </div>
              <div className="flex justify-center">
                <Image src={cm2} alt="Client 2 Logo" className="h-12 w-auto" />
              </div>
              <div className="flex justify-center">
                <Image src={cm3} alt="Client 3 Logo" className="h-12 w-auto" />
              </div>
              <div className="flex justify-center">
                <Image src={cm4} alt="Client 4 Logo" className="h-12 w-auto" />
              </div>
              <div className="flex justify-center">
                <Image src={cm5} alt="Client 5 Logo" className="h-12 w-auto" />
              </div>
              <div className="flex justify-center">
                <Image src={cm6} alt="Client 6 Logo" className="h-12 w-auto" />
              </div>
            </div>
          </div>
        </section>

        {/* groW */}
        <section className="relative w-full h-[636px] flex bg-[#2A7CC7] justify-center items-center mt-[-30px]">
          {/* Right Side Blue Section */}
          <div className="w-[1440px] md:w-1/2 h-full bg-[#2A7CC7] lg:px-[250px] lg:ml-[0px] ml-[50px] py-16  flex flex-col justify-center">
            <div className="w-[438px] flex flex-col gap-[24px]">
              <h5 className="text-white text-lg font-bold leading-[24px] tracking-[0.1px]">
                WORK WITH US
              </h5>
              <h2 className="text-white text-4xl font-bold leading-[50px] tracking-[0.2px]">
                Now Let’s grow Yours
              </h2>
              <p className="text-white lg:text-sm text-[12px] lg:w-auto w-[350px] leading-[20px] tracking-[0.2px]">
                The gradual accumulation of information about atomic and
                small-scale behavior during the first quarter of the 20th
              </p>
              <button className="w-[132px] h-[52px] border border-white rounded-md flex items-center justify-center py-3 px-10 gap-2 mt-6">
                <span className="text-white text-sm font-bold">Button</span>
              </button>
            </div>
          </div>
          {/* Left Side Image */}
          <div className="w-[540px] md:w-1/2 h-full relative">
            <Image
              src={girl2}
              alt="Testimonial Background"
              className="absolute w-[570px] h-[640px] left-[150px] inset-0 object-cover"
            />
          </div>
        </section>
        
        {/* Footer */}
        <footer className="bg-white lg:relative lg:top-[10px] lg:left-[1px] left-[100px] top-[3300px]">
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

          {/* Main Footer Content */}
          <section className="bg-white py-12">
            <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-12">
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
            <div className="max-w-screen-xl mx-auto flex justify-between items-center">
              <p className="text-[#727272] text-sm font-bold">
                Made with love by Finland. All rights reserved.
              </p>
              <div className="flex gap-4"></div>
            </div>
          </section>
        </footer>
      </div>
    </div>
  );
}
