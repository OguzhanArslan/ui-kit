import type { SVGProps } from 'react';
const ChevronUpIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M18.707 15.707a1 1 0 0 1-1.414 0L12 10.414l-5.293 5.293a1 1 0 0 1-1.414-1.414l6.353-6.354a.5.5 0 0 1 .708 0l6.353 6.354a1 1 0 0 1 0 1.414"
      clipRule="evenodd"
    />
  </svg>
);
export default ChevronUpIcon;
