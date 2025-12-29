import type { SVGProps } from 'react';
const HistoryIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M19.75 12a7 7 0 0 0-13.94-.925l.733-.732a1 1 0 1 1 1.414 1.414l-2.853 2.854a.5.5 0 0 1-.708 0l-2.853-2.854a1 1 0 1 1 1.414-1.414l.83.83a9.001 9.001 0 1 1 1.937 6.452 1 1 0 0 1 1.56-1.25A7 7 0 0 0 19.75 12m-6-4a1 1 0 1 0-2 0v4a1 1 0 0 0 1 1h2.5a1 1 0 1 0 0-2h-1.5z"
      clipRule="evenodd"
    />
  </svg>
);
export default HistoryIcon;
