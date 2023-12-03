import { HomeIcon } from "./HomeIcon";
import { MenuIcon } from "./MenuIcon";
import { UserIcon } from "./UserIcon";

type Props = {
  onClick: () => void;
};

export const NavbarDowpdown = ({onClick}: Props) => {
  return (
    <div className="nav-container">
      <div className="nav-left">
        <HomeIcon />
      </div>
      <div className="nav-right">
        <UserIcon />
        <MenuIcon
          onClick={onClick}
        />
      </div>
    </div>
  );
};
