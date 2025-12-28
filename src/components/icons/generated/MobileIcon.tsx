import type { SVGProps } from 'react';
const MobileIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="currentColor" d="M10.5 17a1 1 0 1 0 0 2h3a1 1 0 1 0 0-2z" />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M5.5 5a3 3 0 0 1 3-3h7a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3h-7a3 3 0 0 1-3-3zm3-1h7a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1"
      clipRule="evenodd"
    />
  </svg>
);
export default MobileIcon;
