import { FaYoutube, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaGamepad } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="text-white flex flex-col gap-4 ml-14 mr-9 pt-12 pb-6">
      {/* top Bar */}
      <hr className="border-gray-600 w-full py-6" />
      <div className="w-full mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Left: Newsletter */}
        <div className="space-y-4">
          <h3 className="text-3xl font-semibold">Join our community!</h3>
          <input
            type="email"
            placeholder="*Email"
            className="w-full px-4 py-2 rounded-md bg-transparent border border-white/40 placeholder-white/70 focus:outline-none focus:ring-1 focus:ring-white"
          />
          <button className="w-full py-2 bg-gray-300 text-black font-semibold rounded-md hover:bg-white transition">
            SUBMIT
          </button>
        </div>

        {/* Column: Company */}
        <div className="flex flex-col items-center">
          <div className="w-fit text-left space-y-6">
            <h4 className="text-md font-bold uppercase">Company</h4>
            <ul className="space-y-1 text-md text-white/80">
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Meet the team</a>
              </li>
              <li>
                <a href="#">News & Events</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Column: Contact */}
        <div className="flex flex-col items-center ">
          <div className="w-fit text-left space-y-3">
            <h4 className="text-md font-bold uppercase">Contact</h4>
            <p className="text-md text-white/80 leading-relaxed">
              Via dei Luxardo, 33 – Rome, Italy <br />
              - <br />
              contact@starcade.com <br />
              - <br />
              Mon–Fri | 9.00AM – 5.00PM <br />
              Sat–Sun | Closed
            </p>
          </div>
        </div>

        {/* Column: Social Icons */}
        <div className="flex flex-col items-start sm:items-center lg:items-end justify-start gap-4 mt-6 lg:mt-0">
          <FaYoutube className="w-10 h-10 hover:text-red-500 transition" />
          <FaGamepad className="w-10 h-10 hover:text-purple-400 transition" />
          <FaInstagram className="w-10 h-10 hover:text-pink-500 transition" />
          <FaLinkedin className="w-10 h-10 hover:text-blue-400 transition" />
        </div>
      </div>

      {/*   bottom bar */}
      <hr className="border-gray-600 w-full py-6" />
      <div className="w-full mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* copyright */}
        <div className="space-y-4">
          COPYRIGHT © 2025 STARCADE _ ALL RIGHTS RESERVED
        </div>

        {/*terms and service */}
        <div className="flex flex-col items-center">
          <div className="w-fit text-left space-y-6">
            <ul className="space-y-1 text-md text-white/80">
              <li>
                <a href="#">Terms of Service</a>
              </li>
              <li>
                <a href="#">Refund Policy</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Privacy Policy */}
        <div className="flex flex-col items-center">
          <div className="w-fit text-left space-y-6">
            <ul className="space-y-1 text-md text-white/80">
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Cookie Preferences</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Column: Social Icons */}
        <div className="flex flex-col items-end">
          <div className="w-fit text-left space-y-6">
            <ul className="space-y-1 text-md text-white/80">
              <li>
                <a href="#">End User License Agreement</a>
              </li>
              <li>
                <a href="#">Impressum / Company Info</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/*   bottom bar */}
    </footer>
  );
}
