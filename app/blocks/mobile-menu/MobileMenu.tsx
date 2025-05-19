import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Lang from "~/lang/lang";
import MobileTopMenu from "./MobileTopMenu";
import MobileNavMenu from "./MobileNavMenu";

export default function MobileMenu() {
  return (
    <Disclosure as="div" className="md:hidden">
      {({ open }) => (
        <>
          {/* Toggle Button */}
          <DisclosureButton className="inline-flex items-center justify-center p-2 focus:outline-none">
            <span className="sr-only">{Lang.open_main_menu}</span>
            {open ? (
              <XMarkIcon
                className="h-6 w-6 text-white cursor-pointer"
                aria-hidden="true"
              />
            ) : (
              <img
                src="/images/logos/rainbow-left.png"
                alt="Menu"
                className="h-6 w-6 cursor-pointer"
              />
            )}
          </DisclosureButton>

          {/* Mobile Menu Panel */}
          <DisclosurePanel className="fixed top-0 left-0 right-0 z-50 bg-[#000f26] px-6 py-2 flex flex-col space-y-6 min-h-screen overflow-y-auto">
            {/* Close Button inside panel */}
            <div className="w-full flex justify-end">
              <DisclosureButton className="p-2 text-white hover:text-gray-300">
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </DisclosureButton>
            </div>

            <MobileTopMenu />
            <MobileNavMenu />
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
}
