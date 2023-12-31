type Props = {
  onClick: () => void;
}

export const MenuIcon = ({onClick}: Props) => {
  const light = true;
  return <div onClick={onClick}>
    {light ? (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="25px"
      height="25px"
      viewBox="0,0,256,256"
    >
      <g
        fill="#ffffff"
        fillRule="nonzero"
        stroke="none"
        strokeWidth="1"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="10"
        strokeDasharray=""
        strokeDashoffset="0"
        fontFamily="none"
        fontWeight="none"
        fontSize="none"
        textAnchor="none"
      >
        <g transform="scale(5.12,5.12)">
          <path d="M0,9v2h50v-2zM0,24v2h50v-2zM0,39v2h50v-2z"></path>
        </g>
      </g>
    </svg>
  ) : (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="25px"
      height="25px"
      viewBox="0 0 50 50"
    >
      <path d="M 0 9 L 0 11 L 50 11 L 50 9 Z M 0 24 L 0 26 L 50 26 L 50 24 Z M 0 39 L 0 41 L 50 41 L 50 39 Z"></path>
    </svg>
  )}
  </div>
};
