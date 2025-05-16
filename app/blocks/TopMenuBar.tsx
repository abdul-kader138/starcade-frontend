import { Helper } from "~/utils/helper";
import Lang from "~/lang/lang";
import { ArrowDownTrayIcon } from "@heroicons/react/24/solid";

const helper = new Helper();

export default function Navbar() {
  return (
    <div className="max-w-[1600px] mx-auto flex">
      {/* Logo */}
      {/* Mobile Logo (visible below md) */}
      <img
        className="block md:hidden h-9 w-auto"
        src="/images/logos/starcade-logo-light.png"
        alt={Lang.logo}
      />
      {/* Desktop Logo (visible md and up) */}
      <img
        className="hidden md:block h-9 w-auto"
        src="/images/logos/starcade-logo.png"
        alt={Lang.logo}
      />

      {/* Navigation Elements (Desktop only) */}
      <div className="hidden md:flex items-center gap-4 flex-grow justify-end">
        {/* Search Field */}
        <div className="relative max-w-sm w-full">
          <input
            type="text"
            className="w-full text-white text-sm font-bold pl-12 pr-4 py-1  border-stone-100 rounded-full h-10 bg-transparent"
            onChange={(e) => {
              const placeholder = document.getElementById("fake-placeholder");
              if (placeholder) {
                placeholder.style.opacity = e.target.value ? "0" : "1";
              }
            }}
          />
          <div
            id="fake-placeholder"
            className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center text-white text-sm pointer-events-none transition-opacity duration-200"
          >
            <img
              src="/images/icons/icon-search.svg"
              alt="search"
              className="h-4 w-4 ml-2"
            />
          </div>
        </div>

        {/* Install Button */}
        <button className="text-black bg-white text-sm font-bold rounded-full h-10 px-6 py-1.5 whitespace-nowrap flex items-center gap-2">
          {Lang.install}
          <ArrowDownTrayIcon className="w-4 h-4" />
        </button>

        {/* Account + Cart */}
        <div className="flex items-center gap-2">
          <div className="w-11 h-11 rounded-full bg-[#002459] flex items-center justify-center cursor-pointer">
            <img
              src="/images/icons/icon-account.svg"
              className="w-4 h-4"
              alt={Lang.user}
            />
          </div>
          <div className="w-11 h-11 rounded-full bg-[#002459] flex items-center justify-center cursor-pointer">
            <img
              src="/images/icons/icon-shopping-cart.svg"
              className="w-4 h-4"
              alt={Lang.shoping_cart}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
