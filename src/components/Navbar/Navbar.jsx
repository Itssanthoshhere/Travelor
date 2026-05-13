import { useState } from "react";
import Toggle from "../Buttons/Toggle";
import Logo from "./Logo/Logo";
import NavMenu from "./NavMenu/NavMenu";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const handleFancyClick = () => setMenuOpen(!false);

  return (
    <>
      <div>
        <div className="flex justify-between relative z-2 w-full h-22 items-center px-4 bg-black">
          <Logo />
          <NavMenu menuOpen={menuOpen} toggleMenu={toggleMenu} />
          <Toggle toggleMenu={toggleMenu} />
        </div>
      </div>
    </>
  );
};

export default Navbar;
