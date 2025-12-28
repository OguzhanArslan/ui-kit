import type { SVGProps } from 'react';
const MinusIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4.5 12a1 1 0 0 1 1-1h13a1 1 0 1 1 0 2h-13a1 1 0 0 1-1-1"
      clipRule="evenodd"
    />
  </svg>
);
export default MinusIcon;
