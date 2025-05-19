import { Helper } from "~/utils/helper";
import { useState } from "react";
import {
  ChevronDownIcon,
  MagnifyingGlassIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

const helper = new Helper();

export default function Navbar() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [showSearch, setShowSearch] = useState<boolean>(false);

  const toggleDropdown = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <nav className="hidden md:flex w-full border-t border-white/10">
      <div className="h-16 mx-1 hidden md:flex w-full items-center justify-between px-4 mr-10">
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center">
          {helper?.navigation.map((item: any, index: any) => (
            <div
              className="relative mx-1 items-center justify-center"
              key={index}
            >
              <button
                onClick={() => toggleDropdown(index)}
                className="text-white px-2 py-2 mx-3.5 rounded-md hover:bg-[#2d3849] flex items-center"
              >
                <span className="px-2 text-sm">{item.name}</span>
                <ChevronDownIcon
                  className={`h-3 w-3 transform transition-transform duration-200 ${
                    openIndex === index ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>

              {openIndex === index && item.subItems.length > 0 && (
                <div className="absolute top-full left-0 mt-1 ml-3 w-30 rounded-md bg-[#002459] z-20 space-y-1.5">
                  {item.subItems.map((sub: any, subIdx: any) => (
                    <a
                      key={subIdx}
                      href="#"
                      className="block text-white text-sm px-6 py-2 rounded-md hover:bg-[#002459]"
                    >
                      {sub}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Search Field - Right Side */}
        <div className="relative hidden md:flex items-center justify-end px-0.5 space-x-2 xs:my-0 sm:my-0">
          {/* Toggle Button */}
          <button
            onClick={() => setShowSearch((prev) => !prev)}
            className="text-white hover:text-gray-300 rounded-full hover:bg-white/10 transition"
          >
            {showSearch ? (
              <XMarkIcon className="h-5 w-5" />
            ) : (
              <MagnifyingGlassIcon className="h-5 w-5" />
            )}
          </button>

          {/* Animated Search Field */}
          <div
            className={`transition-all duration-300 ease-in-out overflow-hidden ${
              showSearch ? "w-52 md:w-64 opacity-100" : "w-0 opacity-0"
            }`}
          >
            <input
              type="text"
              autoFocus
              placeholder="Search..."
              className="w-full bg-[#002459] text-white text-sm pl-4 pr-3 py-2 rounded-full border border-white focus:outline-none focus:ring-2 focus:ring-[#002459] transition"
            />
          </div>
        </div>
      </div>
    </nav>
  );
}
