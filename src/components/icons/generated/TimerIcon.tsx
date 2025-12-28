import type { SVGProps } from 'react';
const TimerIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 9a1 1 0 0 1 1 1v2h1a1 1 0 1 1 0 2h-2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M10 3a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2v1.058a8.45 8.45 0 0 1 3.53 1.248l.763-.763a1 1 0 1 1 1.414 1.414l-.615.615a8.5 8.5 0 1 1-12.184 0l-.615-.615a1 1 0 0 1 1.414-1.414l.763.763A8.45 8.45 0 0 1 11 5.058V4a1 1 0 0 1-1-1m8.5 10.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0"
      clipRule="evenodd"
    />
  </svg>
);
export default TimerIcon;
