import type { SVGProps } from 'react';
const ClipboardIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M8 4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2h1a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3zm2 0h4v2h-4zm6 2a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2H7a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1z"
      clipRule="evenodd"
    />
  </svg>
);
export default ClipboardIcon;
