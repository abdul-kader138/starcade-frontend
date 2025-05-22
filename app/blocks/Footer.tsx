import { FaYoutube, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaGamepad } from "react-icons/fa6";
import Lang from "~/lang/lang";

export default function Footer() {
  return (
    <footer className="text-white flex flex-col gap-4 lg:px-20 md:px-20 xs:px-0.5 sm:px-0.5 pt-12 pb-6">
      {/* Top Divider */}
      <hr className="border-gray-600 w-full py-6" />

      {/* Top Section */}
      <div className="w-full mx-auto px-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-start">
        {/* Newsletter */}
        <div className="flex flex-col justify-start items-start space-y-4">
          <h3 className="text-2xl font-semibold">{Lang.join_us}</h3>
          <input
            type="email"
            placeholder="*Email"
            className="w-full px-4 py-2 rounded-md text-sm bg-transparent border border-white/40 placeholder-white/70 focus:outline-none focus:ring-1 focus:ring-white"
          />
          <button className="w-full py-2 bg-gray-300 text-black rounded-md hover:bg-white transition">
            {Lang.submit}
          </button>
        </div>

        {/* Company */}
        <div className="flex flex-col justify-start items-start sm:items-center lg:items-start">
          <div className="space-y-4 text-left sm:text-center lg:text-left">
            <h4 className="text-md font-bold uppercase">Company</h4>
            <ul className="space-y-1 text-sm text-white/80">
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
        <div className="flex flex-col justify-start items-start sm:items-center lg:items-start">
          <div className="space-y-3 text-left sm:text-center lg:text-left">
            <h4 className="text-md font-bold uppercase">
              <a href="#">{Lang.contact}</a>
            </h4>
            <p className="text-sm text-white/80 leading-relaxed">
              {Lang.office_address} <br /> - <br /> {Lang.contact_email} <br />{" "}
              - <br /> {Lang.opening_hour} <br /> {Lang.opening_day}
            </p>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex flex-col justify-start items-start sm:items-center lg:items-end">
          <div className="flex flex-row gap-4 sm:justify-center lg:flex-col lg:items-end">
            <FaYoutube className="w-8 h-8 hover:text-red-500 transition" />
            <FaGamepad className="w-8 h-8 hover:text-purple-400 transition" />
            <FaInstagram className="w-8 h-8 hover:text-pink-500 transition" />
            <FaLinkedin className="w-8 h-8 hover:text-blue-400 transition" />
          </div>
        </div>
      </div>

      {/* Bottom Divider */}
      <hr className="border-gray-600 w-full py-6" />

      {/* Bottom Section */}
      <div className="w-full px-1 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-start mt-2">
        {/* Copyright */}
        <div className="flex flex-col justify-start items-start text-sm text-white/60 text-left sm:text-center lg:text-left">
          {Lang.copyright}
        </div>

        {/* Terms & Refund */}
        <div className="flex flex-col justify-start items-start sm:items-center lg:items-start">
          <ul className="space-y-1 text-sm text-white/80 text-left sm:text-center lg:text-left">
            <li>
              <a href="#">{Lang.terms}</a>
            </li>
            <li>
              <a href="#">{Lang.refund}</a>
            </li>
          </ul>
        </div>

        {/* Privacy Policy */}
        <div className="flex flex-col justify-start items-start sm:items-center lg:items-start">
          <ul className="space-y-1 text-sm text-white/80 text-left sm:text-center lg:text-left">
            <li>
              <a href="#">{Lang.privacy}</a>
            </li>
            <li>
              <a href="#">{Lang.cookie}</a>
            </li>
          </ul>
        </div>

        {/* License & Company Info */}
        <div className="flex flex-col justify-start items-start sm:items-center lg:items-end">
          <ul className="space-y-1 text-sm text-white/80 text-left sm:text-center lg:text-right">
            <li>
              <a href="#">{Lang.license}</a>
            </li>
            <li>
              <a href="#">{Lang.company_info}</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
