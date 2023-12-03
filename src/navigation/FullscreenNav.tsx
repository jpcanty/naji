import { ExIcon } from "./ExIcon";
import { navigationLinks } from "./navigationLinks";

type Props = {
  onClick: () => void;
};

export const FullscreenNav = ({ onClick }: Props) => {
  return (
    <div className="fullscreen">
      <div className="nav-container">
        <div className="nav-left" />
        <div className="nav-right">
          <ExIcon onClick={onClick} />
        </div>
      </div>

      {navigationLinks.map((link) => {
            return <p><a className="nav-link" href={link.href}>{link.title}</a></p>;
          })}
    </div>
  );
};
