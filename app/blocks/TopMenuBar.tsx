import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ArrowDownTrayIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";
import Lang from "~/lang/lang";
import { useUser } from "~/provider/userContext";
import { Helper } from "~/utils/helper";

export default function Navbar() {
  const helper = new Helper();
  const { user, logout, loading } = useUser();
  const [photo, setPhoto] = useState("");
  useEffect(() => {
    if (user?.first_name) {
      setPhoto("images/male.png");
      if (user?.photo_id) {
        setPhoto(
          `${helper.BASE_API}/photos/${user?.photo_id}/small` ||
            "images/male.png"
        );
      }
    }
  }, [user]);

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
        <button className="text-white bg-[#0b923f] cursor-pointer text-sm font-bold rounded-full h-10 px-6 py-1.5 whitespace-nowrap flex items-center gap-2">
          {Lang.install}
          <ArrowDownTrayIcon className="w-4 h-4" />
        </button>

        {/* Account + Cart */}
        <div className="flex items-center gap-2">
          {photo ? (
            <>
              <Menu as="div" className="relative ml-3">
                <div className="flex items-center space-x-2">
                  <img
                    alt="User Profile"
                    src={photo}
                    className="h-8 w-8 rounded-full"
                  />
                  <MenuButton className="text-white text-sm cursor-pointer">
                    {helper.truncateName(
                      user?.first_name + " " + user?.last_name
                    )}
                  </MenuButton>
                </div>
                <MenuItems className="absolute right-0 mt-2 w-48 bg-[#002459] rounded-md shadow-lg py-1 ring-1 ring-black/5 z-50">
                  <MenuItem>
                    <a
                      href="/profile"
                      className="block px-2.5 py-1.5 text-sm text-white hover:bg-gray-700"
                    >
                      {Lang.profil}
                    </a>
                  </MenuItem>
                  <MenuItem>
                    <a
                      href="#"
                      onClick={logout}
                      className="block px-2.5 py-1.5 text-sm text-white hover:bg-gray-700"
                    >
                      {Lang.logout}
                    </a>
                  </MenuItem>
                </MenuItems>
              </Menu>
            </>
          ) : (
            <button
              onClick={() => helper.handleClickRedirect("/login")}
              className="w-11 h-11 rounded-full bg-[#002459] flex items-center justify-center cursor-pointer"
            >
              <img
                src={"/images/icons/icon-account.svg"}
                className="w-4 h-4"
                alt={Lang.user}
              />
            </button>
          )}

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
