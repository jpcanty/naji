import { ExIcon } from "./ExIcon";
import { navigationLinks } from "./navigationLinks";

type Props = {
  onClick: () => void;
};

export const FullscreenNav = ({ onClick }: Props) => {
  return (
    <div className="nav-fullscreen">
      <div className="nav-container">
        <div className="nav-left" />
        <div className="nav-right">
          <ExIcon onClick={onClick} />
        </div>
      </div>

      {navigationLinks.map((link) => {
            return <p key={link.title}><a className="nav-link"  href={link.href}>{link.title}</a></p>;
          })}
    </div>
  );
};
