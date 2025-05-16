import Navbar from "./Navbar";
import TopMenuBar from "./TopMenuBar";
import MobileMenu from "./mobile-menu/MobileMenu";

export function Header() {
  return (
    <>
      <header className="mt-4">
        {/* Mobile Header */}
        <div className="md:hidden flex items-center justify-between py-4 relative">
          {/* Burger on Right */}
          <div className="absolute right-0">
            <MobileMenu />
          </div>

          {/* Logo in center */}
          <div className="flex-grow text-center">
            <img
              src="/images/logos/starcade-logo-light.png"
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
