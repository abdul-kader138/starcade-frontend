import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import {
  Bars3Icon,
  BellIcon,
  CircleStackIcon,
  QuestionMarkCircleIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { PercentBadgeIcon, StarIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";
import { FaUserPlus } from "react-icons/fa";
import { useLocation } from "react-router";
import { useUser } from "~/provider/userContext";
import { Helper } from "~/utils/helper";
import Lang from "../lang/lang";

const initNavigation = [
  { name: Lang.title + " " + Lang.school, href: "/school", current: false },
  { name: Lang.ongoing_tournamenst, href: "/on-going-tournaments", current: false },
  { name: Lang.how_to_play, href: "/how-to-play", current: false },
  { name: Lang.desposit_withdraw, href: "#", current: false },
  { name: Lang.tournamenst_rules, href: "/tournament-rules", current: false },
  { name: Lang.enter + " " + Lang.title, href: "#", current: false },
];

const topLeftNavigation = [
  {
    name: Lang.resposible_gaming,
    href: "#",
    icon: CircleStackIcon,
    current: false,
  },
  { name: Lang.help, href: "#", icon: QuestionMarkCircleIcon, current: false },
];

const topRightNavigation = [
  { name: Lang.rewards, href: "#", icon: StarIcon, current: false },
  { name: Lang.promotion, href: "#", icon: PercentBadgeIcon, current: false },
];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export function Header() {
  const [navigation, setNavigationState] = useState(initNavigation);
  const { handleClickRedirect, truncateName, BASE_API } = new Helper();
  const { user, logout, loading } = useUser();
  const [profileImage, setProfileImage] = useState("images/male.png");
  const location = useLocation();

  useEffect(() => {
    if (user?.photo_id) {
      setProfileImage(
        `${BASE_API}/photos/${user?.photo_id}/small` || "images/male.png"
      );
    }
  }, [user]);

  return (
    <header>
      {/* Top Navigation */}
      <div className="relative flex h-36 items-center justify-between">
        <div className="flex space-x-2 ps-2">
          {topLeftNavigation.map((item) => {
            const Tag = item.icon;
            return (
              <a
                key={item.name}
                href={item.href}
                aria-current={item.current ? "page" : undefined}
                className={classNames(
                  item.current ? "text-red" : "text-gray-300",
                  "hover:text-red-700 px-3 py-2 text-sm font-medium"
                )}
              >
                <Tag aria-hidden="true" className="size-6 inline-block me-2" />
                <span className="hidden lg:inline-block">{item.name}</span>
              </a>
            );
          })}
        </div>
        <div className="h-full p-2">
          <a href="/" className="cursor-pointer">
            <img src="/fxrumble.svg" alt="Starcade" className="block h-full" />
          </a>
        </div>
        <div className="flex space-x-2 pe-2">
          {topRightNavigation.map((item) => {
            const Tag = item.icon;
            return (
              <a
                key={item.name}
                href={item.href}
                aria-current={item.current ? "page" : undefined}
                className={classNames(
                  item.current ? "text-red" : "text-gray-300",
                  "hover:text-red-700 px-3 py-2 text-sm font-medium"
                )}
              >
                <Tag aria-hidden="true" className="size-6 inline-block me-2" />
                <span className="hidden lg:inline-block">{item.name}</span>
              </a>
            );
          })}
        </div>
      </div>

      {/* Main Navigation Bar */}
      <Disclosure as="nav" className="bg-gray-800">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="relative flex h-16 items-center justify-between">
                {/* Mobile Menu Button */}
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  <DisclosureButton className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:bg-gray-700 hover:text-white">
                    <span className="sr-only"></span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </DisclosureButton>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-3">
                    {navigation.map((item) => {
                      const isActive = location.pathname === item.href;
                      return (
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            isActive
                              ? "bg-gray-600 text-white"
                              : "text-gray-300 hover:bg-gray-700 hover:text-white",
                            "rounded-md px-1.5 py-2 text-sm font-bold"
                          )}
                        >
                          {item.name}
                        </a>
                      );
                    })}
                  </div>
                </div>

                {/* Profile Section */}
                <div className="absolute right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  {loading ? null : (
                    <>
                      {user ? (
                        <>
                          <button className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white">
                            <span className="sr-only">View notifications</span>
                            <BellIcon className="h-6 w-6" aria-hidden="true" />
                          </button>
                          <Menu as="div" className="relative ml-3">
                            <div className="flex items-center space-x-2">
                              <img
                                alt="User Profile"
                                src={profileImage}
                                className="h-8 w-8 rounded-full"
                              />
                              <MenuButton className="text-white text-sm cursor-pointer">
                                {truncateName(
                                  user?.first_name + " " + user?.last_name
                                )}
                              </MenuButton>
                            </div>
                            <MenuItems className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 ring-1 ring-black/5 z-50">
                              <MenuItem>
                                <a
                                  href="/profile"
                                  className="block px-2.5 py-1.5 text-sm text-gray-700 hover:bg-gray-100"
                                >
                                  {Lang.profil}
                                </a>
                              </MenuItem>
                              <MenuItem>
                                <a
                                  href="#"
                                  className="block px-2.5 py-1.5 text-sm text-gray-700 hover:bg-gray-100"
                                >
                                  {Lang.settings}
                                </a>
                              </MenuItem>
                              <MenuItem>
                                <a
                                  href="#"
                                  onClick={logout}
                                  className="block px-2.5 py-1.5 text-sm text-gray-700 hover:bg-gray-100"
                                >
                                  {Lang.logout}
                                </a>
                              </MenuItem>
                            </MenuItems>
                          </Menu>
                        </>
                      ) : (
                        <>
                          <button
                            onClick={() => handleClickRedirect("/registration")}
                            className="bg-gradient-to-r from-red-500 to-orange-500 px-2 py-1.5 text-sm  rounded-md flex cursor-pointer items-center shadow-md  transition transform"
                          >
                            <FaUserPlus className="mr-1" /> {Lang.sign_up}
                          </button>
                          <button
                            onClick={() => handleClickRedirect("/login")}
                            className="bg-gray-700 text-white cursor-pointer ml-2 border-1 px-2 py-1.5 rounded-md text-sm"
                          >
                            🔒 {Lang.login}
                          </button>
                        </>
                      )}
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* Mobile Menu Panel */}
            <DisclosurePanel className="sm:hidden">
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
              </div>
            </DisclosurePanel>
          </>
        )}
      </Disclosure>
    </header>
  );
}
