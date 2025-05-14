import Navbar from "./Navbar";
import MobileMenu from "./mobile-menu/MobileMenu";
import TopMenuBar from "./TopMenuBar";

export function Header() {
  return (
    <>
      <header className="mt-4">
        <TopMenuBar />
        {/* Hamburger Menu for Mobile */}
        <MobileMenu />
      </header>
      <Navbar />
    </>
  );
}
