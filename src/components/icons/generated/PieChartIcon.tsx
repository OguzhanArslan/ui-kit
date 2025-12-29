import type { SVGProps } from 'react';
const PieChartIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10m-2.062 1A8.001 8.001 0 0 1 4 12a8 8 0 0 1 7-7.938V12a1 1 0 0 0 1 1zm0-2H13V4.062A8.004 8.004 0 0 1 19.938 11"
      clipRule="evenodd"
    />
  </svg>
);
export default PieChartIcon;
