//Icon list – array


export const BarsIcon = ({ className }) => (
  <svg
    className={`transform ${className}`}
    viewBox="0 0 24 24"
    width="40"
    height="20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      className="transition-transform origin-center transform"
      x="2"
      y="2"
      width="20"
      height="2"
      rx="1"
      fill="currentColor"
    />
    {/* <rect
      className="transition-opacity opacity-100"
      x="2"
      y="11"
      width="20"
      height="2"
      rx="1"
      fill="currentColor"
    />
    <rect
      className="transition-transform origin-center transform"
      x="2"
      y="17"
      width="20"
      height="2"
      rx="1"
      fill="currentColor"
    /> */}
  </svg>
);



export const XIcon = ({ className }) => (
  <svg
    className={`transform ${className}`}
    viewBox="0 0 24 24"
    width="40"
    height="40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      className="transition-transform origin-center transform rotate-45"
      x="2"
      y="5"
      width="20"
      height="2"
      rx="1"
      fill="currentColor"
    />
    <rect
      className="transition-opacity opacity-0"
      x="2"
      y="11"
      width="20"
      height="2"
      rx="1"
      fill="currentColor"
    />
    <rect
      className="transition-transform origin-left transform -rotate-45"
      x="2"
      y="17"
      width="20"
      height="2"
      rx="1"
      fill="currentColor"
    />
  </svg>
);



