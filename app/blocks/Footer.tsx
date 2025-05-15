import { FaYoutube, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaGamepad } from "react-icons/fa6";
import Lang from "~/lang/lang";

export default function Footer() {
  return (
    <footer className="text-white flex flex-col gap-4 ml-14 mr-9 pt-12 pb-6">
      {/* Top Divider */}
      <hr className="border-gray-600 w-full py-6" />

      {/* Top Section */}
      <div className="w-full mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-start">
        {/* Newsletter */}
        <div className="flex flex-col h-full justify-start items-start space-y-4">
          <h3 className="text-3xl font-semibold">{Lang.join_us}</h3>
          <input
            type="email"
            placeholder="*Email"
            className="w-full px-4 py-2 rounded-md bg-transparent border border-white/40 placeholder-white/70 focus:outline-none focus:ring-1 focus:ring-white"
          />
          <button className="w-full py-2 bg-gray-300 text-black font-semibold rounded-md hover:bg-white transition">
            {Lang.submit}
          </button>
        </div>

        {/* Company */}
        <div className="flex flex-col h-full justify-center items-center">
          <div className="space-y-4 text-left">
            <h4 className="text-md font-bold uppercase">Company</h4>
            <ul className="space-y-1 text-md text-white/80">
              <li>
                <a href="#">{Lang.about}</a>
              </li>
              <li>
                <a href="#">{Lang.meet_the_team}</a>
              </li>
              <li>
                <a href="#">{Lang.news_event}</a>
              </li>
              <li>
                <a href="#">{Lang.service}</a>
              </li>
              <li>
                <a href="#">{Lang.carrer}</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact */}
        <div className="flex flex-col h-full justify-center items-center">
          <div className="space-y-3 text-left">
            <h4 className="text-md font-bold uppercase">
              {" "}
              <a href="#">{Lang.contact}</a>
            </h4>
            <p className="text-md text-white/80 leading-relaxed">
              {Lang.office_address} <br />
              - <br />
              {Lang.contact_email} <br />
              - <br />
              {Lang.opening_hour} <br />
              {Lang.opening_day}
            </p>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex flex-col h-full justify-start items-start sm:items-center lg:items-end gap-4">
          <FaYoutube className="w-8 h-8 hover:text-red-500 transition" />
          <FaGamepad className="w-8 h-8 hover:text-purple-400 transition" />
          <FaInstagram className="w-8 h-8 hover:text-pink-500 transition" />
          <FaLinkedin className="w-8 h-8 hover:text-blue-400 transition" />
        </div>
      </div>

      {/* Bottom Divider */}
      <hr className="border-gray-600 w-full py-6" />

      {/* Bottom Section */}
      <div className="w-full mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-start">
        {/* Copyright */}
        <div className="flex flex-col h-full justify-start items-start text-sm text-white/60">
          {Lang.copyright}
        </div>

        {/* Terms & Refund */}
        <div className="flex flex-col h-full justify-center items-center">
          <div className="space-y-3 text-left">
            <ul className="space-y-1 text-md text-white/80">
              <li>
                <a href="#">{Lang.terms}</a>
              </li>
              <li>
                <a href="#">{Lang.refund}</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Privacy Policy */}
        <div className="flex flex-col h-full justify-center items-center">
          <div className="space-y-3 text-left">
            <ul className="space-y-1 text-md text-white/80">
              <li>
                <a href="#">{Lang.privacy}</a>
              </li>
              <li>
                <a href="#">{Lang.cookie}</a>
              </li>
            </ul>
          </div>
        </div>

        {/* License & Company Info */}
        <div className="flex flex-col h-full justify-end items-end">
          <div className="space-y-3 text-left">
            <ul className="space-y-1 text-md text-white/80">
              <li>
                <a href="#">{Lang.license}</a>
              </li>
              <li>
                <a href="#">{Lang.company_info}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
