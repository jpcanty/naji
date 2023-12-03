import { HomeIcon } from "./HomeIcon";
import { MenuIcon } from "./MenuIcon";
import { UserIcon } from "./UserIcon";

export const NavbarDowpdown = () => {
  return (
    <div className="nav-container">
      <div className="nav-left">
        <HomeIcon />
      </div>
      <div className="nav-right">
        <UserIcon />
        <MenuIcon />
      </div>
    </div>
  );
};
