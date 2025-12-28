import type { SVGProps } from 'react';
const WalletIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="currentColor" d="M15 12.5a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2z" />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M20 6.5a2 2 0 0 1 2 2V18a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3zM17 5H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V8.5H9a1 1 0 0 1 0-2h9V6a1 1 0 0 0-1-1"
      clipRule="evenodd"
    />
  </svg>
);
export default WalletIcon;
