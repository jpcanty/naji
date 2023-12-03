import { ExIcon } from "./ExIcon";

type Props = {
  onClick: () => void;
};

export const FullscreenNav = ({ onClick }: Props) => {
  return (
    <div className="fullscreen">
      <div className="nav-container">
        <div className="nav-left">\
        </div>
        <div className="nav-right">
          <ExIcon onClick={onClick}/>
        </div>
      </div>
    </div>
  );
};
