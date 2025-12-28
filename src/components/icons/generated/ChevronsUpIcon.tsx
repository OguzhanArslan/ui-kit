import type { SVGProps } from 'react';
const ChevronsUpIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M17.293 12.207a1 1 0 0 0 1.414-1.414l-6.353-6.354a.5.5 0 0 0-.708 0l-6.353 6.354a1 1 0 1 0 1.414 1.414L12 6.914z"
    />
    <path
      fill="currentColor"
      d="M17.293 18.207a1 1 0 0 0 1.414-1.414l-6.353-6.354a.5.5 0 0 0-.708 0l-6.353 6.354a1 1 0 1 0 1.414 1.414L12 12.914z"
    />
  </svg>
);
export default ChevronsUpIcon;
