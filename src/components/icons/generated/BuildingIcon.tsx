import type { SVGProps } from 'react';
const BuildingIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M9 5h2v2H9zM11 9H9v2h2zM15 9h-2v2h2zM11 13H9v2h2zM13 13h2v2h-2zM15 5h-2v2h2z"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M8 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3zm8 2H8a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1"
      clipRule="evenodd"
    />
  </svg>
);
export default BuildingIcon;
