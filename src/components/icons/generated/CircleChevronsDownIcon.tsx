import type { SVGProps } from 'react';
const CircleChevronsDownIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M16.707 12.043a1 1 0 0 0-1.414 0L12 15.336l-3.293-3.293a1 1 0 1 0-1.414 1.414l4.353 4.354a.5.5 0 0 0 .708 0l4.353-4.354a1 1 0 0 0 0-1.414"
    />
    <path
      fill="currentColor"
      d="M15.293 7.043a1 1 0 1 1 1.414 1.414l-4.353 4.354a.5.5 0 0 1-.708 0L7.293 8.457a1 1 0 0 1 1.414-1.414L12 10.336z"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10m0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16"
      clipRule="evenodd"
    />
  </svg>
);
export default CircleChevronsDownIcon;
