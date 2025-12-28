import type { SVGProps } from 'react';
const ChevronLeftIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M15.207 5.293a1 1 0 0 1 0 1.414L9.914 12l5.293 5.293a1 1 0 0 1-1.414 1.414l-6.354-6.353a.5.5 0 0 1 0-.708l6.354-6.353a1 1 0 0 1 1.414 0"
      clipRule="evenodd"
    />
  </svg>
);
export default ChevronLeftIcon;
