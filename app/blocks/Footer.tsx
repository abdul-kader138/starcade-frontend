import { FaYoutube, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaGamepad } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="flex ml-12 mr-9 text-white border-t border-white/10 pt-12">
      {/* TOP SECTION */}
      <div className="w-full mx-auto px-6 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {/* Join Section */}
          <div className="col-span-2 space-y-4">
            <h3 className="text-xl font-semibold">Join our community!</h3>
            <input
              type="email"
              placeholder="*Email"
              className="w-full px-4 py-2 rounded-md bg-transparent border border-white/40 placeholder-white/70 focus:outline-none focus:ring-1 focus:ring-white"
            />
            <button className="w-full py-2 rounded-md bg-gray-300 text-black font-medium hover:bg-white transition">
              SUBMIT
            </button>
          </div>

          {/* Company */}
          <div className="items-center space-y-2.5 justify-center px-10 mx-5">
            <h4 className="font-bold">COMPANY</h4>
            <ul className="text-sm text-white/80 space-y-1">
              <li>About</li>
              <li>Meet the team</li>
              <li>News & Events</li>
              <li>Services</li>
              <li>Careers</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="items-center justify-center space-y-2.5 px-10 mx-5">
            <h4 className="font-bold">CONTACT</h4>
            <ul className="text-sm text-white/80 space-y-1">
              <li>Via dei Luxardo, 33 - Rome, Italy</li>
              <li>contact@starcade.com</li>
              <li>Mon–Fri | 9.00AM – 5.00PM</li>
              <li>Sat–Sun | Closed</li>
            </ul>
          </div>

          {/* Social Icons */}
          <div className="flex flex-col items-end justify-end gap-4 pt-2 mr-5">
            <FaYoutube className="w-6 h-6 hover:text-red-500 cursor-pointer" />
            <FaGamepad className="w-6 h-6 hover:text-yellow-400 cursor-pointer" />
            <FaInstagram className="w-6 h-6 hover:text-pink-400 cursor-pointer" />
            <FaLinkedin className="w-6 h-6 hover:text-blue-400 cursor-pointer" />
          </div>
        </div>
      </div>

      {/*  <div className="w-full mx-auto flex flex-row items-center gap-3 text-center">
        <span>COPYRIGHT © 2025 STARCADE _ ALL RIGHTS RESERVED</span>
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
          <span>Terms of Service</span>
          <span>Refund Policy</span>
          <span>Privacy Policy</span>
          <span>Cookie Preferences</span>
          <span>End User License Agreement</span>
          <span>Impressum / Company Info</span>
        </div>
      </div> */}

      {/* BOTTOM SECTION */}
    </footer>
  );
}
