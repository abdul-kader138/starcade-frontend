// components/MobileMenu.tsx
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Lang from "~/lang/lang";
import MobileTopMenu from "./MobileTopMenu";
import MobileNavMenu from "./MobileNavMenu";

export default function MobileMenu() {
  return (
    <Disclosure as="div" className="md:hidden">
      {({ open }) => (
        <>
          {/* Toggle Button */}
          <DisclosureButton className="inline-flex items-center justify-center p-2 text-gray-300 hover:text-white focus:outline-none">
            <span className="sr-only">{Lang.open_main_menu}</span>
            {open ? (
              <XMarkIcon
                className="h-6 w-6 cursor-pointer text-white"
                aria-hidden="true"
              />
            ) : (
              <Bars3Icon
                className="h-6 w-6 cursor-pointer text-white"
                aria-hidden="true"
              />
            )}
          </DisclosureButton>

          {/* Mobile Menu Panel */}
          <DisclosurePanel className="fixed top-0 left-0 right-0 z-50 bg-[#000f26] px-6 py-4 flex flex-col space-y-6 min-h-screen overflow-y-auto">
            {/* Close Button */}
            <div className="w-full flex justify-end">
              <DisclosureButton className="p-2 text-white hover:text-gray-300">
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </DisclosureButton>
            </div>

            <MobileTopMenu />

            {/* Navigation Links with Dropdown Example */}
            <MobileNavMenu />
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
}
