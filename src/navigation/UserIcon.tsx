export const UserIcon = () => {
  const light = true;
  return (
    <a href="/user" className="home-icon">
      {light ? (
        <svg
          width="25px"
          height="25px"
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 60.671 60.671"
          fill="#ffffff"
          stroke="#ffffff"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0" />

          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          />

          <g id="SVGRepo_iconCarrier">
            {" "}
            <g>
              {" "}
              <g>
                {" "}
                <ellipse cx="30.336" cy="12.097" rx="11.997" ry="12.097" />{" "}
                <path d="M35.64,30.079H25.031c-7.021,0-12.714,5.739-12.714,12.821v17.771h36.037V42.9 C48.354,35.818,42.661,30.079,35.64,30.079z" />{" "}
              </g>{" "}
            </g>{" "}
          </g>
        </svg>
      ) : (
        <svg
          width="25px"
          height="25px"
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 60.671 60.671"
        >
          <g>
            <g>
              <ellipse cx="30.336" cy="12.097" rx="11.997" ry="12.097" />
              <path
                d="M35.64,30.079H25.031c-7.021,0-12.714,5.739-12.714,12.821v17.771h36.037V42.9
           C48.354,35.818,42.661,30.079,35.64,30.079z"
              />
            </g>
          </g>
        </svg>
      )}
    </a>
  );
};
