import { Outlet, Scripts, ScrollRestoration } from "react-router";

export default function AuthLayout() {
  return (
    <div className="bg-[#000f26] text-white min-h-screen flex items-center justify-center">
      <Outlet />
      <ScrollRestoration />
      <Scripts />
    </div>
  );
}
