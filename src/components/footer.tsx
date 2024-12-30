import React from 'react'

function Footer() {
  return (
    <footer className="text-gray-600 body-font">
      <div className="container px-5 mx-auto">
        {/* Header section with social links */}
        <div className="container mx-auto flex items-center sm:flex-row flex-col mb-12">
          <h1 className='text-[#252B42] font-bold text-2xl'>
            Bandage
          </h1>
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

        {/* Divider */}
        <div className="border-t border-[#e6e6e6]" />

        {/* Main Footer Content */}
        <section className="bg-white py-12">
          <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
            {/* Company Info */}
            <div>
              <h2 className="text-[#252b42] text-base font-bold">Company Info</h2>
              <nav className="flex flex-col gap-2.5 mt-3">
                <a href="#" className="text-[#727272] text-sm font-bold hover:text-[#23A6F0]">About Us</a>
                <a href="#" className="text-[#727272] text-sm font-bold hover:text-[#23A6F0]">Careers</a>
                <a href="#" className="text-[#727272] text-sm font-bold hover:text-[#23A6F0]">We Are Hiring</a>
                <a href="#" className="text-[#727272] text-sm font-bold hover:text-[#23A6F0]">Blog</a>
              </nav>
            </div>

            {/* Legal */}
            <div>
              <h2 className="text-[#252b42] text-base font-bold">Legal</h2>
              <nav className="flex flex-col gap-2.5 mt-3">
                <a href="#" className="text-[#727272] text-sm font-bold hover:text-[#23A6F0]">Terms of Service</a>
                <a href="#" className="text-[#727272] text-sm font-bold hover:text-[#23A6F0]">Privacy Policy</a>
                <a href="#" className="text-[#727272] text-sm font-bold hover:text-[#23A6F0]">Cookies</a>
                <a href="#" className="text-[#727272] text-sm font-bold hover:text-[#23A6F0]">Refund Policy</a>
              </nav>
            </div>

            {/* Features */}
            <div>
              <h2 className="text-[#252b42] text-base font-bold">Features</h2>
              <nav className="flex flex-col gap-2.5 mt-3">
                <a href="#" className="text-[#727272] text-sm font-bold hover:text-[#23A6F0]">Business Marketing</a>
                <a href="#" className="text-[#727272] text-sm font-bold hover:text-[#23A6F0]">User Analytics</a>
                <a href="#" className="text-[#727272] text-sm font-bold hover:text-[#23A6F0]">Live Chat</a>
                <a href="#" className="text-[#727272] text-sm font-bold hover:text-[#23A6F0]">Unlimited Support</a>
              </nav>
            </div>

            {/* Resources */}
            <div>
              <h2 className="text-[#252b42] text-base font-bold">Resources</h2>
              <nav className="flex flex-col gap-2.5 mt-3">
                <a href="#" className="text-[#727272] text-sm font-bold hover:text-[#23A6F0]">iOS & Android</a>
                <a href="#" className="text-[#727272] text-sm font-bold hover:text-[#23A6F0]">Watch a Demo</a>
                <a href="#" className="text-[#727272] text-sm font-bold hover:text-[#23A6F0]">Customers</a>
                <a href="#" className="text-[#727272] text-sm font-bold hover:text-[#23A6F0]">API</a>
              </nav>
            </div>

            {/* Get in Touch */}
            <div>
              <h2 className="text-[#252b42] text-base font-bold">Get In Touch</h2>
              <div className="mt-3">
                <div className="relative mb-4">
                  <input
                    type="email"
                    className="w-full h-12 px-4 border border-[#e6e6e6] rounded-lg bg-[#f8f8f8] text-[#727272] text-sm font-normal focus:outline-none focus:border-[#23A6F0]"
                    placeholder="Your Email"
                  />
                  <button className="absolute right-0 top-0 h-12 px-4 bg-[#23a6f0] text-white text-sm font-normal rounded-r-lg hover:bg-[#1a7fb3] transition-colors">
                    Subscribe
                  </button>
                </div>
                <p className="text-[#727272] text-xs">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Bottom Section */}
      <section className="bg-[#FAFAFA] py-4">
        <div className="max-w-screen-xl mx-auto px-5 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-[#727272] text-sm font-bold">Made with love by Finland. All rights reserved.</p>
        </div>
      </section>
    </footer>
  )
}

export default Footer