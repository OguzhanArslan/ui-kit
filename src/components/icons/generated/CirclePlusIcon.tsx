import type { SVGProps } from 'react';
const CirclePlusIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 16.535a1 1 0 0 1-1-1V13H8.464a1 1 0 1 1 0-2H11V8.465a1 1 0 0 1 2 0V11h2.536a1 1 0 1 1 0 2H13v2.535a1 1 0 0 1-1 1"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10m0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16"
      clipRule="evenodd"
    />
  </svg>
);
export default CirclePlusIcon;
