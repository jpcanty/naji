import useWindowDimensions from "../hooks/useWindowDimensions";
import { NavbarDowpdown } from "./NavbarDropdown";
import { NavbarLinks } from "./NavbarLinks";
import "./Navbar.css";
import { useState } from "react";
import { FullscreenNav } from "./FullscreenNav";

export const Navbar = () => {
  const { width } = useWindowDimensions();
  const [showDropdown, setShowDropdown] = useState(false);
  const isLarge = width > 800;
  return (
    <nav>
      {isLarge ? (
        <NavbarLinks />
      ) : showDropdown ? (
        <FullscreenNav
          onClick={() => {
            setShowDropdown(false);
          }}
        />
      ) : (
        <NavbarDowpdown onClick={() => {
          setShowDropdown(true);
        }} />
      )}
    </nav>
  );
};
