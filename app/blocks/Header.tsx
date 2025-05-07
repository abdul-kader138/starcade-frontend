import { Helper } from "~/utils/helper";

import Navbar from "./Navbar";
import MobileMenu from "./mobile-menu/MobileMenu";
import TopMenuBar from "./TopMenuBar";

export function Header() {
  const { handleClickRedirect, truncateName, BASE_API } = new Helper();
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
