import { HomeIcon } from "./HomeIcon";
import { UserIcon } from "./UserIcon";
import { navigationLinks } from "./navigationLinks";

export const NavbarLinks = () => {
  return (
    <div className="nav-container">
      <div className="nav-left">
        <HomeIcon />
          {navigationLinks.map((link) => {
            return <a className="nav-link" href={link.href}>{link.title}</a>;
          })}
      </div>
      <div className="nav-right">
        <UserIcon />
      </div>
    </div>
  );
};
