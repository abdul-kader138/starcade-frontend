import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";
import type { Route } from "./+types/root";
import "./app.css"; // Ensure custom CSS is included here
import { UserProvider } from "./provider/userContext";
import { Header } from "./blocks/Header";
import Slider from "./blocks/Slider";
import Commodorian from "./blocks/Commodorian";
import ContactSection from "./blocks/ContactSection";
import News from "./blocks/News";
import Section from "./blocks/Section";
import { Helper } from "./utils/helper";
import Faq from "./blocks/Faq";
import Footer from "./blocks/Footer";

// 🔹 Global Layout
function Layout({ children }: { children: React.ReactNode }) {
  const { gameSections } = new Helper();
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="bg-[#000f26] text-white flex flex-col min-h-screen overflow-x-hidden">
        {/* Global Header */}
        <Header />

        <Slider />

        <div className="text-white ml-14 mr-9 px-10 py-3 mt-12 mb-2">
          <Section sections={gameSections} />
        </div>

        <Commodorian />

        <ContactSection />

        <News />
        <Faq />

        {/* Main Content (Dynamic Routes Load Here) */}
        <main className="flex-grow p-4">{children}</main>

        {/*  <Footer /> */}

        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <UserProvider>
      <Layout>
        <Outlet />
      </Layout>
    </UserProvider>
  );
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
