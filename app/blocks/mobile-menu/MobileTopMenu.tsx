import Lang from "~/lang/lang";
import { useState } from "react";
import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";

export default function MobileTopMenu() {
  return (
    <>
      {/* Install Button */}

      {/* Icon Buttons */}
      <div className="flex justify-center gap-6 mt-1">
        <div
          title={Lang.install}
          className="w-14 h-14 rounded-full bg-[#0b923f] flex items-center justify-center cursor-pointer"
        >
          <ArrowDownTrayIcon className="w-6 h-6 font-bold" />
        </div>
        <div className="w-14 h-14 rounded-full bg-[#002459] flex items-center justify-center cursor-pointer">
          <img
            src="/images/icons/icon-account.svg"
            className="h-6 w-6"
            alt={Lang.user}
          />
        </div>
        <div className="w-14 h-14 rounded-full bg-[#002459] flex items-center justify-center cursor-pointer">
          <img
            src="/images/icons/icon-shopping-cart.svg"
            className="h-6 w-6"
            alt={Lang.shoping_cart}
          />
        </div>
      </div>
    </>
  );
}
