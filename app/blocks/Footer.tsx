import { useEffect, useState } from "react";
import {
  FaEnvelope,
  FaEnvelopeOpen,
  FaFacebookF,
  FaLinkedinIn,
  FaPhone,
  FaSpinner,
  FaTwitter,
} from "react-icons/fa";
import { Helper } from "~/utils/helper";
import Lang from "../lang/lang";
import toast, { Toaster } from "react-hot-toast";

export function Footer() {
  const { getCurrentYear,BASE_API } = new Helper();
  const [now, setNow] = useState<number | null>(null);
  const [email, setEmail] = useState("");


  useEffect(() => {
    setNow(getCurrentYear());
  }, []);
  return (
    <>
    <Toaster position="top-right" reverseOrder={false} />
      <div className="relative w-full bg-gray-900 text-white pt-20 pb-10 z-10">
        {/* SVG Wave Top */}
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-0">
          <svg
            className="relative block w-full h-[100px]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 100"
            preserveAspectRatio="none"
          >
            <path
              d="M0,80 
              C150,100 300,20 450,60 
              C600,100 750,30 900,70 
              C1050,110 1150,60 1200,40 
              L1200,0 L0,0 Z"
              fill="#111e2f"
            />
          </svg>
        </div>

        {/* Content Area */}
        <div className="px-15 py-5">
          <hr />
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-5 grid grid-cols-1 md:grid-cols-3 gap-10 text-sm">
          {/* About */}
          <div>
            <h3 className="text-white font-semibold mb-4 uppercase text-base">
              {Lang.about_starcade}
            </h3>
            <p className="text-gray-400 leading-relaxed text-sm">
              <span className="italic sm:px-2 sm:py-1">{Lang.title}</span>
              {Lang.subscribe_text}
              <span className="text-red-500 font-medium ml-1 cursor-pointer hover:underline">
                {Lang.read_more}
              </span>
            </p>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-base">
              {Lang.useful_link}
            </h3>
            <ul className="text-gray-400 space-y-2 text-sm">
              <li>
                <a href="#" className="hover:underline">
                  {Lang.about_us}
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  {Lang.blog}
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  {Lang.help}
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  {Lang.security_account_balance}
                </a>
              </li>
            </ul>
          </div>

          {/* Address */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-base">
              {Lang.address}
            </h3>
            <ul className="text-gray-400 space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <FaPhone className="text-white mt-1" />
                <span>{Lang.company_phone}</span>
              </li>
              <li className="flex items-start gap-2">
                <FaEnvelope className="text-white mt-1" />
                <span>{Lang.company_email}</span>
              </li>
              <li className="flex items-start gap-2">
                <FaEnvelopeOpen className="text-white mt-1" />
                <span>{Lang.mailing_address}</span>
              </li>
            </ul>

            {/* Social Links */}
            <div className="flex gap-3 mt-4">
              <a
                href="#"
                className="p-2 bg-gray-600 rounded-full hover:bg-gray-700 transition"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="p-2 bg-gray-600 rounded-full hover:bg-gray-700 transition"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="p-2 bg-gray-600 rounded-full hover:bg-gray-700 transition"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>
      </div>
      <footer className="text-white bg-gray-950 py-5 px-6 md:px-20">
        <div className="w-full mx-auto flex flex-col md:flex-row items-center justify-center">
          <div className="flex space-x-4 mt-2 md:mt-0 text-sm">
            &copy; {now} {Lang.title}. {Lang.copyright}.
          </div>
        </div>
      </footer>
    </>
  );
}
