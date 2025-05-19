import Navbar from "./Navbar";
import TopMenuBar from "./TopMenuBar";
import MobileMenu from "./mobile-menu/MobileMenu";

export function Header() {
  return (
    <>
      <header className="xs:mt-0.5 sm:mt-0.5 mt-0.5">
        {/* Mobile Header */}
        <div className="md:hidden flex items-center justify-between py-1.5 relative">
          {/* Burger on Right */}
          <div className="absolute left-0 mx-2">
            <MobileMenu />
          </div>

          {/* Logo in center */}
          <div className="flex-grow px-1 ml-5">
            <img
              src="/images/logos/starcade-logo-light-v1.png"
              alt="Logo"
              className="h-8 w-auto mx-auto"
            />
          </div>
        </div>

        {/* Desktop Header (original design untouched) */}
        <div className="hidden md:block w-full">{<TopMenuBar />}</div>
      </header>
      <Navbar />
    </>
  );
}
