import { Helper } from "~/utils/helper";
import Lang from "~/lang/lang";

const helper = new Helper();
export default function Navbar() {
  return (
    <>
      <div className="flex-shrink-0 px-2">
        <img
          className="h-9 xl:w-86 w-auto"
          src="/images/logos/starcade-logo.png"
          alt={Lang.logo}
        />
      </div>
      <div className="hidden md:flex gap-2 items-center">
        <div className="mx-1.5">
          <div className="relative w-full pl-24">
            {/* Input Field */}
            <input
              type="text"
              className="text-white text-sm font-bold pl-12 pr-4 py-1 border border-stone-100 rounded-full w-38 h-10 bg-transparent"
              onChange={(e) => {
                const placeholder = document.getElementById("fake-placeholder");
                if (placeholder) {
                  placeholder.style.opacity = e.target.value ? "0" : "1";
                }
              }}
            />

            {/* Fake Placeholder (positioned inside input) */}
            <div
              id="fake-placeholder"
              className="absolute mx-6 px-6 top-1/2 -translate-y-1/2 flex items-center justify-center text-white text-md transition-opacity duration-200 pointer-events-none"
            >
              <span>{Lang.search}</span>
              <img
                src="/images/icons/icon-search.svg"
                alt="search"
                className="h-4 w-4 ml-2"
              />
            </div>
          </div>
        </div>

        {/* Install Button */}
        <button className="text-black bg-white text-md font-bold mx-3 rounded-full w-30 h-10 px-4 py-2 flex justify-center items-center">
          {Lang.install}
        </button>

        {/* Account and Cart Icons */}
        <div className="flex items-center">
          <div className="relative cursor-pointer w-11 h-11 rounded-4xl bg-[#002459]">
            <img
              src="/images/icons/icon-account.svg"
              className="p-4"
              alt={Lang.user}
            />
          </div>

          <div className="relative ml-2 cursor-pointer w-11 h-11 rounded-4xl bg-[#002459]">
            <img
              src="/images/icons/icon-shopping-cart.svg"
              className="p-4"
              alt={Lang.shoping_cart}
            />
          </div>
        </div>
      </div>
    </>
  );
}
