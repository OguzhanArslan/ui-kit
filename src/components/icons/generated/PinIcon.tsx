import type { SVGProps } from 'react';
const PinIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M16 10a4 4 0 1 1-8 0 4 4 0 0 1 8 0m-2 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M20 10c0 6.87-5.9 10.791-7.567 11.76a.85.85 0 0 1-.866 0C9.9 20.792 4 16.87 4 10c0-4 3-8 8-8s8 4 8 8M6 10c0-3.063 2.265-6 6-6s6 2.937 6 6c0 3.283-1.632 5.804-3.414 7.586A16.2 16.2 0 0 1 12 19.679l-.14-.093a16.2 16.2 0 0 1-2.446-2C7.632 15.804 6 13.283 6 10"
      clipRule="evenodd"
    />
  </svg>
);
export default PinIcon;
