import { Helper } from "~/utils/helper";
import { useState } from "react";
import {
  ChevronDownIcon,
  MagnifyingGlassIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Lang from "~/lang/lang";

const helper = new Helper();
export default function MobileNavMenu() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [showSearch, setShowSearch] = useState<boolean>(false);

  const toggleDropdown = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <>
      <div className="w-full space-y-4 mt-0">
        <div className="w-full space-y-2 mt-6">
          {helper.navigation.map((item, index) => (
            <div key={index} className="w-full">
              <button
                onClick={() => toggleDropdown(index)}
                className="w-full text-left text-white px-4 py-2 rounded-md hover:bg-[#2d3849] flex items-center justify-between"
              >
                <span>{item.name}</span>
                <ChevronDownIcon
                  className={`h-4 w-4 transform transition-transform duration-200 ${
                    openIndex === index ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>
              {openIndex === index && item.subItems.length > 0 && (
                <div className="mt-1 ml-4 space-y-1 rounded-md">
                  {item.subItems.map((sub, subIdx) => (
                    <a
                      key={subIdx}
                      href="#"
                      className="block text-white text-sm px-4 py-2 rounded hover:bg-[#5c79a4]"
                    >
                      {sub}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Search Input Section */}
        <div className="px-4 mt-4">
          {showSearch ? (
            <div className="flex items-center space-x-2">
              <input
                type="text"
                autoFocus
                placeholder="Search..."
                className="w-full bg-[#002459] text-white text-sm pl-4 pr-3 py-2 rounded-full border border-white focus:outline-none focus:ring-2 focus:ring-[#002459] transition"
              />
              <button
                onClick={() => setShowSearch(false)}
                className="text-white hover:text-gray-300 rounded-full hover:bg-white/10 transition p-1"
              >
                <XMarkIcon className="h-5 w-5" />
              </button>
            </div>
          ) : (
            <button
              onClick={() => setShowSearch(true)}
              className="text-white hover:text-gray-300 rounded-full hover:bg-white/10 transition p-1"
            >
              <MagnifyingGlassIcon className="h-6 w-6" />
            </button>
          )}
        </div>
      </div>
    </>
  );
}
