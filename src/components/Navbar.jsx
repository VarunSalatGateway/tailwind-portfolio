import { useState } from "react";
import { CloseIcon, VLogoIcon, MenuIcon } from "./icons";
const Navbar = () => {
  const [navShow, setNavShow] = useState(false);
  return (
    <header className="h-[60px] px-[5%] flex justify-between items-center">
      <span className="block scale-[1.8] text-primary">
        <VLogoIcon />
      </span>
      <ul className="gap-6 hidden sm:flex">
        <li>
          <a
            className="text-white text-lg hover:text-xl block transition-all duration-300 sm:text-black"
            href="#"
          >
            Home
          </a>
        </li>
        <li>
          <a
            className="text-white text-lg hover:text-xl block transition-all duration-300 sm:text-black"
            href="#about-me-section"
          >
            About Me
          </a>
        </li>
        <li>
          <a
            className="text-white text-lg hover:text-xl block transition-all duration-300 sm:text-black"
            href="#skill-section"
          >
            Skills
          </a>
        </li>
        <li>
          <a
            className="text-white text-lg hover:text-xl block transition-all duration-300 sm:text-black"
            href="#portfolio-section"
          >
            Portfolio
          </a>
        </li>

        <li>
          <a
            className="text-white text-lg hover:text-xl block transition-all duration-300 sm:text-black"
            href="#contact-us"
          >
            Contact Me
          </a>
        </li>
      </ul>

      {navShow && (
        <ul className="gap-4 w-1/2 rounded flex flex-col absolute top-[60px] right-4 p-4 bg-gray-300">
          <li>
            <a
              className="text-base hover:text-xl block transition-all duration-300 sm:text-black"
              href="#"
            >
              Home
            </a>
          </li>
          <li>
            <a
              className="text-base hover:text-xl block transition-all duration-300 sm:text-black"
              href="#"
            >
              About Me
            </a>
          </li>
          <li>
            <a
              className="text-base hover:text-xl block transition-all duration-300 sm:text-black"
              href="#"
            >
              Skills
            </a>
          </li>
          <li>
            <a
              className="text-base hover:text-xl block transition-all duration-300 sm:text-black"
              href="#"
            >
              Portfolio
            </a>
          </li>
          <li>
            <a
              className="text-base hover:text-xl block transition-all duration-300 sm:text-black"
              href="#"
            >
              Companies
            </a>
          </li>
          <li>
            <a
              className="text-base hover:text-xl block transition-all duration-300 sm:text-black"
              href="#"
            >
              Contact Me
            </a>
          </li>
        </ul>
      )}

      <div
        className="h-[40px] text-3xl cursor-pointer sm:hidden w-[40px] grid place-content-center"
        onClick={() => setNavShow(!navShow)}
      >
        {navShow && <CloseIcon className="h-[2em] w-[2em]" />}
        {!navShow && <MenuIcon className="h-[2em] w-[2em]" />}
      </div>
    </header>
  );
};

export default Navbar;
