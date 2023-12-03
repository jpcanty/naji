import useWindowDimensions from "../hooks/useWindowDimensions";
import { NavbarDowpdown } from "./NavbarDropdown";
import { NavbarLinks } from "./NavbarLinks";
import "./Navbar.css";

export const Navbar = () => {
  const { width } = useWindowDimensions();
  const isLarge = width > 834;
  return (
    <nav>
      {isLarge ? <NavbarLinks/> : <NavbarDowpdown/>}
    </nav>
  );
};

