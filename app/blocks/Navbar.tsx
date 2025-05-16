import { Helper } from "~/utils/helper";
import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const helper = new Helper();
export default function Navbar() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleDropdown = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <nav className="w-full border-t border-white/10">
      <div className="h-16 mx-1">
        {/* Desktop Menu */}
        <div className="hidden md:flex">
          {helper?.navigation.map((item: any, index: any) => (
            <div
              className="relative mx-1 items-center justify-center"
              key={index}
            >
              <button
                onClick={() => toggleDropdown(index)}
                className="w-full text-white px-2 items-center justify-center py-2 mx-3.5 rounded-md hover:bg-[#2d3849] flex items-center"
              >
                <span className="px-2 text-sm">{item.name}</span>
                <ChevronDownIcon
                  className={`h-3 w-3 transform transition-transform duration-200 ${
                    openIndex === index ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>

              {/* Dropdown (static example) */}
              {openIndex === index && item.subItems.length > 0 && (
                <div className="absolute top-full left-0 mt-1 ml-3 w-30 rounded-md bg-[#1f2e45] shadow-md z-20 space-y-1.5">
                  {item.subItems.map((sub: any, subIdx: any) => (
                    <a
                      key={subIdx}
                      href="#"
                      className="block text-white text-sm px-6 py-2 rounded-md hover:bg-[#5c79a4]"
                    >
                      {sub}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}
