import Lang from "~/lang/lang";
import { useState } from "react";

export default function MobileTopMenu() {
  return (
    <>
      {/* Search Input */}
      <div className="w-full">
        <input
          type="text"
          placeholder={Lang.search}
          className="w-full text-white placeholder-white border border-white/30 rounded-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-white"
        />
      </div>

      {/* Install Button */}
      <button className="w-full text-center text-black bg-white rounded-full py-3 font-semibold hover:bg-gray-200 transition">
        {Lang.install}
      </button>

      {/* Icon Buttons */}
      <div className="flex justify-center gap-6 mt-8">
        <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center cursor-pointer">
          <img
            src="/images/icons/icon-account.svg"
            className="h-6 w-6"
            alt={Lang.user}
          />
        </div>
        <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center cursor-pointer">
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
