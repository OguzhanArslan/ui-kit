import type { SVGProps } from 'react';
const CircleArrowLeftIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12.457 7.293a1 1 0 0 1 0 1.414L10.164 11h6.086a1 1 0 1 1 0 2h-6.086l2.293 2.293a1 1 0 0 1-1.414 1.414l-4.354-4.353a.5.5 0 0 1 0-.708l4.354-4.353a1 1 0 0 1 1.414 0"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10m0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16"
      clipRule="evenodd"
    />
  </svg>
);
export default CircleArrowLeftIcon;
