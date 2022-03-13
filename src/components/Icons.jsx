// Menu <==> Hamburger

export const Hamburger = () => (
  <svg
    className="w-8 h-8 cursor-pointer z-50 relative"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="#000"
    stroke="currentColor"
    strokeWidth="3"
  >
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);


// Close

export const Close = () => (
  <svg
    className="w-8 h-8 cursor-pointer z-50 relative"
    fill="#fff"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 6h16M4 12h16M4 18h16"
    />
  </svg>
);