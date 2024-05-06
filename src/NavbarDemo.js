import React, { useState, useEffect } from "react";
import { Menu, MenuItem } from "./component/ui/navbar-menu";
import { cn } from "./utils/cn";
import { Link } from "react-router-dom";

export function NavbarDemo() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" scrolled={scrolled} />
      <p className={`text-white ${scrolled ? "hidden" : "block"} dark:text-white`}>
        The Navbar will show on top of the page
      </p>
    </div>
  );
}

function Navbar({ className, scrolled }) {
  const [active, setActive] = useState(null);

  return (
    <div
      className={cn(
        "fixed rounded-full inset-x-0 max-w-2xl mx-auto z-50",
        scrolled ? "bg-blue-500 dark:bg-blue-900" : "bg-transparent",
        className
      )}
    >
      <Menu setActive={setActive}>
      <Link to="/">
        <MenuItem setActive={setActive} active={active} item="Home">
        </MenuItem>
        </Link>
        <Link to='/Portfolio' >
        <MenuItem setActive={setActive} active={active} item="Portfolio">
        </MenuItem>
        </Link>
        
      </Menu>
    </div>
  );
}

export default NavbarDemo;