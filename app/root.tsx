import {
  Link,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import "./tailwind.css";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <NavBar />
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export function NavBar() {
  return (
    <nav className="bg-gray-800 p-2">
      <div className="container flex flex-row items-start mx-auto space-x-10">
        <div className="text-white text-xl font-bold">
          <img
            className="h-10 w-auto"
            src="/flames.png"
            alt="Flames Animation App"
          />
        </div>
        <div className="hidden md:flex space-x-10">
          <Link to="/" className="text-white">
            Home
          </Link>
          <Link to="/animations" className="text-white">
            Animations
          </Link>
          <Link to="/about" className="text-white">
            About
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default function App() {
  return <Outlet />;
}
