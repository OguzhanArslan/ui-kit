import type { SVGProps } from 'react';
const MoonIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M11.024 2.078a1 1 0 0 1 .16 1.074 8.003 8.003 0 0 0 9.664 9.664 1 1 0 0 1 1.234 1.234A10.003 10.003 0 0 1 11.95 22C6.463 22 2 17.537 2 12.05A10.003 10.003 0 0 1 9.95 2.082a1 1 0 0 1 1.074.16zm-2.2 2.14A8.003 8.003 0 0 0 4 12.05C4 16.433 7.567 20 11.95 20a8.003 8.003 0 0 0 7.832-4.824 10.003 10.003 0 0 1-10.958-10.958"
      clipRule="evenodd"
    />
  </svg>
);
export default MoonIcon;
