import { Outlet, Scripts, ScrollRestoration } from "react-router";
import Footer from "~/blocks/Footer";
import { Header } from "~/blocks/Header";

export default function MainLayout() {
  return (
    <>
      <Header />
      <main className="flex-1 bg-[#000f26] text-white">
        <Outlet />
      </main>
      <Footer />
      <ScrollRestoration />
      <Scripts />
    </>
  );
}
