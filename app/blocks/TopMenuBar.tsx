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
        src="/images/logos/starcade-logo-light-v1.png"
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
        {/* Install Button */}
        <button className="text-white bg-[#E62928] cursor-pointer text-sm font-bold rounded-full h-10 px-6 py-1.5 whitespace-nowrap flex items-center gap-2">
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
