
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { MdOutlineMailOutline } from "react-icons/md";

export default function GreenHeader() {
  return (
    <div className="lg:block hidden w-full h-[58px] bg-[#23856D]">
    <div className=" text-white py-2 text-sm flex flex-col md:flex-row justify-between items-center px-4 md:px-8 w-full">
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
      </div>
  
  );
}
