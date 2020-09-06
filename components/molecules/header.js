import { useState } from "react";

const Header = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  return (
    <div>
      <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <a href="/">
            <span className="font-semibold text-xl tracking-tight">
              Kagepedia
            </span>
          </a>
        </div>
        <div className="block lg:hidden">
          <button
            className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
            onClick={() => setShowNavbar(!showNavbar)}
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              {showNavbar ? (
                <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z" />
              ) : (
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              )}
            </svg>
          </button>
        </div>
        <div
          className={
            "w-full block flex-grow-0 lg:flex lg:items-center lg:w-auto" +
            (showNavbar ? "" : " hidden")
          }
        >
          <div className="text-sm lg:flex-grow">
            <a
              href="/posts/"
              className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
            >
              Posts
            </a>
            <a
              href="/about/"
              className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
            >
              About Me
            </a>
            <a
              href="/contact/form"
              className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
