import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Slider from "./Slider";
import { Helper } from "~/utils/helper";

const navigation = [
  { name: "Store", href: "#", current: false },
  { name: "News", href: "#", current: false },
  { name: "FAQ", href: "#", current: false },
  { name: "Help", href: "#", current: false },
  { name: "About Starcade", href: "#", current: false },
];

function classNames(...classes:any) {
  return classes.filter(Boolean).join(" ");
}

export function Header() {
  const { handleClickRedirect, truncateName, BASE_API } = new Helper();
  return (
    <>
    <Disclosure as="nav" className="bg-gray-950 text-white">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <img
                    className="h-12 w-auto"
                    src="/logo.png"
                    alt="Epic Games"
                  />
                </div>
                <div className="hidden md:block">
                  <div className="ml-10 flex items-baseline space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "text-white"
                            : "text-gray-300 hover:text-white",
                          "px-3 py-2 text-sm font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <div className="hidden md:flex md:items-center">
                <button   onClick={() => handleClickRedirect("/login")} className="cursor-pointer text-sm font-medium text-white bg-gray-700 px-4 py-1.5 rounded-md mr-2 hover:bg-gray-600">
                  Sign in
                </button>
                <button className="text-sm font-medium text-gray-900 bg-blue-500 px-4 py-1.5 rounded-md hover:bg-blue-400">
                  Download
                </button>
              </div>

              <div className="-mr-2 flex md:hidden">
                <DisclosureButton className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </DisclosureButton>
              </div>
            </div>
          </div>

          <DisclosurePanel className="md:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <DisclosureButton
                  key={item.name}
                  as="a"
                  href={item.href}
                  className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                >
                  {item.name}
                </DisclosureButton>
              ))}
              <DisclosureButton onClick={()=>handleClickRedirect("/login")} className=" cursor-pointer block w-full text-left px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
                Sign in
              </DisclosureButton>
              <DisclosureButton className="block w-full text-left px-3 py-2 text-base font-medium bg-blue-500 text-gray-900 rounded-md hover:bg-blue-400">
                Download
              </DisclosureButton>
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
   
    </>
  );
}
